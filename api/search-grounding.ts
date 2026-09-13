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

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    const { query } = req.body || {};
    const ai = getGeminiClient();
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: query || "Latest global university admissions deadlines and scholarship requirements 2026",
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "No results found.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    return res.status(200).json({ text, sources: groundingChunks });
  } catch (error: any) {
    console.error("Vercel Search Grounding API error:", error?.message || error);
    return res.status(200).json({
      text: "Unable to fetch live search grounding at this moment, but standard advice applies: Verify application deadlines directly on official university portals.",
      sources: []
    });
  }
}
