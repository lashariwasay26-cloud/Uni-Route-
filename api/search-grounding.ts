import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getGeminiClient } from './_helpers.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
