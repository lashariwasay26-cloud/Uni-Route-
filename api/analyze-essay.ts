import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Type } from '@google/genai';
import { getGeminiClient, callWithModelFallback, generateEssayFallback } from './_helpers.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { essayText, promptTitle, targetUniversity } = req.body || {};

  if (!essayText || essayText.trim().length < 20) {
    return res.status(400).json({ error: 'Essay text must be at least 20 characters.' });
  }

  try {
    const ai = getGeminiClient();
    const systemPrompt = `You are an admissions essay editor for top universities.
Analyze this essay draft:
Topic: ${promptTitle || 'Personal Statement'}
Target University: ${targetUniversity || 'Global Top Universities'}

Essay:
"""
${essayText}
"""

Return JSON object matching: overallScore (int), hookRating, clarityAndFlow, toneAnalysis, strengths (array), improvementAreas (array), revisedExcerpt, recommendedNextSteps (array).`;

    const parsedData = await callWithModelFallback("analyze-essay", async (model) => {
      const response = await ai.models.generateContent({
        model,
        contents: systemPrompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              overallScore: { type: Type.INTEGER },
              hookRating: { type: Type.STRING },
              clarityAndFlow: { type: Type.STRING },
              toneAnalysis: { type: Type.STRING },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
              improvementAreas: { type: Type.ARRAY, items: { type: Type.STRING } },
              revisedExcerpt: { type: Type.STRING },
              recommendedNextSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: [
              "overallScore", "hookRating", "clarityAndFlow", "toneAnalysis",
              "strengths", "improvementAreas", "recommendedNextSteps"
            ],
          },
        },
      });

      const text = response.text || "{}";
      return JSON.parse(text);
    });

    return res.status(200).json(parsedData);
  } catch (error: any) {
    console.warn("Vercel Essay API error fallback:", error?.message || error);
    const fallbackData = generateEssayFallback(essayText || "", promptTitle || "", targetUniversity || "");
    return res.status(200).json(fallbackData);
  }
}
