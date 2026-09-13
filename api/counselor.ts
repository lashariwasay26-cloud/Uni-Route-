import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not configured.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

const FALLBACK_MODELS = ["gemini-3.8-flash", "gemini-3.1-pro-preview", "gemini-flash-latest"];

async function callWithTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  let timeoutId: NodeJS.Timeout;
  const timeoutPromise = new Promise<T>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Timeout after ${timeoutMs}ms`));
    }, timeoutMs);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timeoutId);
  });
}

async function callWithModelFallback<T>(
  actionName: string,
  fn: (model: string) => Promise<T>
): Promise<T> {
  let lastError: any = null;
  for (const model of FALLBACK_MODELS) {
    try {
      return await callWithTimeout(fn(model), 8000);
    } catch (err: any) {
      lastError = err;
      console.warn(`[${actionName}] Model ${model} fallback attempt:`, err?.message || err);
    }
  }
  throw lastError;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS headers for Vercel
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history } = req.body || {};
    const ai = getGeminiClient();

    const systemInstruction = `You are 'UniRoute Counselor', an expert educational advisor specializing in higher education, global scholarships (Fulbright, Chevening, DAAD, Erasmus Mundus, MEXT), Pakistani scholarships (HEC Overseas, Ehsaas, PEEF, LUMS NOP, NUST, FAST), SAT preparation strategies, and university essay guidance.
Provide supportive, accurate, concise, and structured advice.
Format your responses cleanly and professionally:
- Use clear bullet points (- or *) for items.
- Use bold text (**text**) for key university names, deadlines, and requirements.
- Use concise headings (### Title) to organize sections.`;

    const formattedHistory = Array.isArray(history)
      ? history.map((item: any) => ({
          role: item.sender === "user" ? "user" : "model",
          parts: [{ text: item.text }],
        }))
      : [];

    const replyText = await callWithModelFallback("counselor", async (model) => {
      const chat = ai.chats.create({
        model,
        config: { systemInstruction },
        history: formattedHistory,
      });

      const response = await chat.sendMessage({ message });
      if (!response.text) throw new Error("Empty response received");
      return response.text;
    });

    return res.status(200).json({ reply: replyText });
  } catch (error: any) {
    console.error("Vercel Counselor API error:", error?.message || error);
    return res.status(200).json({
      reply: "I am experiencing high traffic right now. For immediate guidance, check target university SAT/ACT thresholds and draft your personal statement narrative. Please ask again in a moment!",
    });
  }
}
