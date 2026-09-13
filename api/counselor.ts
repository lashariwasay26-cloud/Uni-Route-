import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getGeminiClient, callWithModelFallback } from './_helpers.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
