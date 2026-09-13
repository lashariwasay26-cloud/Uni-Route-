import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getGeminiClient, callWithModelFallback, generateAlgorithmicFallback } from './_helpers.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const profile = req.body || {};

  try {
    const ai = getGeminiClient();

    const activitiesFormatted = Array.isArray(profile.activitiesList) && profile.activitiesList.length > 0
      ? profile.activitiesList.map((act: any, idx: number) => 
          `Activity #${idx + 1}: Role: ${act.role || 'Participant'}, Org: ${act.organization || 'N/A'}, Type: ${act.activityType || 'General'}, Details: ${act.description || 'N/A'}`
        ).join('\n')
      : (profile.extracurriculars || 'General involvement');

    const honorsFormatted = Array.isArray(profile.honorsList) && profile.honorsList.length > 0
      ? profile.honorsList.map((h: any, idx: number) => 
          `Honor #${idx + 1}: Title: ${h.title || 'Award'}, Level: ${h.level || 'School'}, Details: ${h.description || 'N/A'}`
        ).join('\n')
      : (profile.honorsAndAwards || 'None reported');

    const preferredCountriesStr = Array.isArray(profile.preferredCountries) && profile.preferredCountries.length > 0
      ? profile.preferredCountries.join(', ')
      : (profile.preferredCountries || 'United States');

    const promptText = `Conduct a realistic international university profile evaluation for:
Name: ${profile.fullName || 'Applicant'} | GPA: ${profile.gpa || '3.5'} | SAT: ${profile.satScore || 'Optional'} | Major: ${profile.intendedMajor || 'Undecided'}
Target Regions: ${preferredCountriesStr} | EFC/Budget: ${profile.efcAnnualUsd || '$0'}

Extracurriculars:
${activitiesFormatted}

Honors:
${honorsFormatted}

Return valid JSON with: overallRating, ratingScore (1-100 integer), profileArchetype, summary, reachUniversities (array with name, country, chancePercentage, category, rationale, aidPolicy, databaseMatch, scholarshipTitle, acceptanceRate, officialBenchmarkComparison, admittedProfileReality), targetUniversities (same), safetyUniversities (same), needBlindAnalysis, testingGapAnalysis, extracurricularAudit, strengths, gapsAndWeaknesses, actionPlan, scholarshipMatchScore, recommendedScholarships.`;

    const resultData = await callWithModelFallback("analyze-profile", async (model) => {
      const response = await ai.models.generateContent({
        model,
        contents: promptText,
        config: { responseMimeType: "application/json" },
      });

      let text = response.text || "{}";
      if (text.includes("```")) {
        text = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      }
      const firstBrace = text.indexOf("{");
      const lastBrace = text.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace !== -1) {
        text = text.substring(firstBrace, lastBrace + 1);
      }
      return JSON.parse(text);
    });

    return res.status(200).json(resultData);
  } catch (error: any) {
    console.warn("Vercel Profile API error fallback:", error?.message || error);
    const fallbackData = generateAlgorithmicFallback(profile);
    return res.status(200).json(fallbackData);
  }
}
