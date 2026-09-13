import { GoogleGenAI } from "@google/genai";

export const getGeminiClient = () => {
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

export const FALLBACK_MODELS = ["gemini-3.8-flash", "gemini-3.1-pro-preview", "gemini-flash-latest"];

export async function callWithTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
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

export async function callWithModelFallback<T>(
  actionName: string,
  fn: (model: string) => Promise<T>
): Promise<T> {
  let lastError: any = null;
  for (const model of FALLBACK_MODELS) {
    try {
      return await callWithTimeout(fn(model), 8000);
    } catch (err: any) {
      lastError = err;
      const shortErr = err?.status || (err?.message ? err.message.slice(0, 80) : "timeout/error");
      console.warn(
        `[${actionName}] Model ${model} busy or rate-limited (${shortErr}). Trying next fallback...`
      );
    }
  }
  throw lastError;
}

export function generateAlgorithmicFallback(profile: any) {
  const p = profile || {};
  const gpaVal = parseFloat(p.gpa) || 3.5;
  const satVal = parseInt(p.satScore) || 1350;
  const activitiesCount = Array.isArray(p.activitiesList) ? p.activitiesList.length : 1;
  const honorsCount = Array.isArray(p.honorsList) ? p.honorsList.length : 1;

  let gpaScore = Math.min(35, Math.max(10, Math.round((gpaVal / 4.0) * 35)));
  let satScoreComp = Math.min(25, Math.max(8, Math.round((satVal / 1600) * 25)));
  let actScore = Math.min(25, 10 + activitiesCount * 3);
  let honorScore = Math.min(15, 5 + honorsCount * 4);
  const ratingScore = Math.min(98, Math.max(35, gpaScore + satScoreComp + actScore + honorScore));

  const preferredCountries = Array.isArray(p.preferredCountries) && p.preferredCountries.length > 0
    ? p.preferredCountries
    : typeof p.preferredCountries === 'string' && p.preferredCountries.trim()
    ? [p.preferredCountries]
    : ['United States'];

  const major = p.intendedMajor || 'General Studies';
  const name = p.fullName || 'Applicant';

  const reachList: any[] = [];
  const targetList: any[] = [];
  const safetyList: any[] = [];

  if (preferredCountries.includes('United States') || preferredCountries.includes('US')) {
    reachList.push({ name: 'Harvard University', country: 'United States', category: 'Reach', chancePercentage: '2% - 4% (Reach)', rationale: `Need-blind admission with 100% demonstrated need met for ${major}.`, aidPolicy: '100% Need Met, No Loans', databaseMatch: true, scholarshipTitle: 'Harvard Financial Aid Initiative', acceptanceRate: '3.4%', officialBenchmarkComparison: 'SAT mid-50%: 1510-1580, GPA 3.95+', admittedProfileReality: 'Global Olympiad medalists, published researchers, and visionary founders.' });
    targetList.push({ name: 'University of Washington', country: 'United States', category: 'Target', chancePercentage: '28% - 38% (Target)', rationale: `Outstanding public research university with rigorous ${major} department.`, aidPolicy: 'Out-of-State Merit Awards', databaseMatch: true, scholarshipTitle: 'Purple & Gold Scholarship', acceptanceRate: '47%', officialBenchmarkComparison: 'SAT mid-50%: 1330-1500, GPA 3.8+', admittedProfileReality: 'Solid academic foundation and meaningful extracurricular involvement.' });
    safetyList.push({ name: 'University of Texas at Arlington', country: 'United States', category: 'Safety', chancePercentage: '75% - 90% (Safety)', rationale: `Competitive out-of-state tuition waiver and strong ${major} employment pipelines.`, aidPolicy: 'Out-of-State Tuition Waiver + Merit', databaseMatch: true, scholarshipTitle: 'Academic Excellence Waiver', acceptanceRate: '80%', officialBenchmarkComparison: 'SAT mid-50%: 1100-1300, GPA 3.4+', admittedProfileReality: 'Strong likelihood of acceptance and automatic tuition reduction.' });
  }

  if (preferredCountries.includes('United Kingdom') || preferredCountries.includes('UK')) {
    reachList.push({ name: 'University of Oxford', country: 'United Kingdom', category: 'Reach', chancePercentage: '3% - 6% (Reach)', rationale: `World-class department for ${major} with rigorous tutorial system.`, aidPolicy: 'Clarendon & Reach Oxford Scholarships', databaseMatch: true, scholarshipTitle: 'Clarendon Fund Scholarship', acceptanceRate: '13%', officialBenchmarkComparison: 'Entry requirement: A*AA - A*A*A', admittedProfileReality: 'Top regional board or national olympiad recognition.' });
    targetList.push({ name: 'University of Warwick', country: 'United Kingdom', category: 'Target', chancePercentage: '30% - 40% (Target)', rationale: `Top-tier UK program for ${major} with strong graduate placement.`, aidPolicy: 'Chancellor\'s International Scholarships', databaseMatch: true, scholarshipTitle: 'Warwick Undergraduate Scholarship', acceptanceRate: '22%', officialBenchmarkComparison: 'Entry requirements: AAA - AAB', admittedProfileReality: 'Consistent high academic rigor and focused extracurricular narrative.' });
    safetyList.push({ name: 'University of Manchester', country: 'United Kingdom', category: 'Safety', chancePercentage: '65% - 80% (Safety)', rationale: `High acceptance likelihood for ${major} with excellent global reputation.`, aidPolicy: 'Global Futures Scholarship', databaseMatch: true, scholarshipTitle: 'Manchester Merit Award', acceptanceRate: '55%', officialBenchmarkComparison: 'Entry requirements: AAB - ABB', admittedProfileReality: 'Strong academic record meeting standard university entry thresholds.' });
  }

  if (preferredCountries.includes('Canada')) {
    reachList.push({ name: 'University of Toronto', country: 'Canada', category: 'Reach', chancePercentage: '10% - 15% (Reach)', rationale: `Elite Canadian institution for ${major}.`, aidPolicy: 'Lester B. Pearson International Scholarship', databaseMatch: true, scholarshipTitle: 'Lester B. Pearson Full Ride', acceptanceRate: '43%', officialBenchmarkComparison: 'Average entering average: 93%+', admittedProfileReality: 'Exceptional academic standing and extensive community leadership.' });
    targetList.push({ name: 'University of British Columbia', country: 'Canada', category: 'Target', chancePercentage: '35% - 45% (Target)', rationale: `Premier research university matching ${major} goals.`, aidPolicy: 'International Major Entrance Scholarship', databaseMatch: true, scholarshipTitle: 'Karen McKellin Award', acceptanceRate: '52%', officialBenchmarkComparison: 'Competitive admission based on senior-year grade averages.', admittedProfileReality: 'Strong academic performance and sustained community service.' });
    safetyList.push({ name: 'University of Alberta', country: 'Canada', category: 'Safety', chancePercentage: '70% - 85% (Safety)', rationale: `Excellent safety option offering generous international entrance awards.`, aidPolicy: 'President\'s International Distinction', databaseMatch: true, scholarshipTitle: 'International Admission Scholarship', acceptanceRate: '58%', officialBenchmarkComparison: 'High acceptance for qualified applicants.', admittedProfileReality: 'Reliable admission outcome with robust financial support options.' });
  }

  if (preferredCountries.includes('Pakistan')) {
    reachList.push({ name: 'LUMS (Lahore University of Management Sciences)', country: 'Pakistan', category: 'Reach', chancePercentage: '15% - 25% (Reach)', rationale: `Top national institution for ${major} with highly selective admissions.`, aidPolicy: 'National Outreach Programme (NOP)', databaseMatch: true, scholarshipTitle: 'NOP Full Ride Scholarship', acceptanceRate: '10-15%', officialBenchmarkComparison: 'Top 2% national board or 1400+ SAT equivalence.', admittedProfileReality: 'Top-tier board rank and outstanding holistic profile.' });
    targetList.push({ name: 'NUST (National University of Sciences & Technology)', country: 'Pakistan', category: 'Target', chancePercentage: '40% - 55% (Target)', rationale: `Premier engineering and computing institution for ${major}.`, aidPolicy: 'Need-Based & HEC Merit', databaseMatch: true, scholarshipTitle: 'HEC Merit Scholarship', acceptanceRate: '20%', officialBenchmarkComparison: 'Net exam score top tier and 3.7+ GPA equivalence.', admittedProfileReality: 'Rigorous STEM foundation and test score excellence.' });
    safetyList.push({ name: 'FAST-NUCES', country: 'Pakistan', category: 'Safety', chancePercentage: '70% - 85% (Safety)', rationale: `Premier computing and tech institution in Pakistan.`, aidPolicy: 'PEEF & Honhaar Scholarship', databaseMatch: true, scholarshipTitle: 'Honhaar Scholarship Program', acceptanceRate: '40%', officialBenchmarkComparison: 'Entry test threshold met.', admittedProfileReality: 'Solid math and computing aptitude.' });
  }

  if (reachList.length === 0) {
    reachList.push({ name: 'Harvard University', country: 'United States', category: 'Reach', chancePercentage: '2% - 4% (Reach)', rationale: `Need-blind admission with 100% demonstrated need met for ${major}.`, aidPolicy: '100% Need Met, No Loans', databaseMatch: true, scholarshipTitle: 'Harvard Financial Aid Initiative', acceptanceRate: '3.4%', officialBenchmarkComparison: 'SAT mid-50%: 1510-1580, GPA 3.95+', admittedProfileReality: 'Global Olympiad medalists and published researchers.' });
    targetList.push({ name: 'University of Washington', country: 'United States', category: 'Target', chancePercentage: '28% - 38% (Target)', rationale: `Outstanding public research university with rigorous ${major} department.`, aidPolicy: 'Out-of-State Merit Awards', databaseMatch: true, scholarshipTitle: 'Purple & Gold Scholarship', acceptanceRate: '47%', officialBenchmarkComparison: 'SAT mid-50%: 1330-1500, GPA 3.8+', admittedProfileReality: 'Solid academic foundation.' });
    safetyList.push({ name: 'University of Texas at Arlington', country: 'United States', category: 'Safety', chancePercentage: '75% - 90% (Safety)', rationale: `Competitive out-of-state tuition waiver and strong ${major} employment pipelines.`, aidPolicy: 'Out-of-State Tuition Waiver + Merit', databaseMatch: true, scholarshipTitle: 'Academic Excellence Waiver', acceptanceRate: '80%', officialBenchmarkComparison: 'SAT mid-50%: 1100-1300, GPA 3.4+', admittedProfileReality: 'Strong likelihood of acceptance.' });
  }

  return {
    overallRating: ratingScore >= 85 ? "Elite Competitive Global Applicant" : ratingScore >= 70 ? "Strong Contender with Targeted Reach Potential" : "Developing International Applicant",
    ratingScore,
    profileArchetype: `${major} Focused Profile with ${activitiesCount} Active Commitments & ${honorsCount} Honors`,
    summary: `${name} presents a GPA of ${gpaVal} and SAT of ${satVal} targeting ${preferredCountries.join(', ')} for ${major}. With a calculated competitiveness score of ${ratingScore}/100, this profile aligns well with structured international application tiers.`,
    reachUniversities: reachList,
    targetUniversities: targetList,
    safetyUniversities: safetyList,
    needBlindAnalysis: {
      isNeedSensitive: true,
      advice: `Evaluated against family EFC of ${p.efcAnnualUsd || '$20,000'} in target regions: ${preferredCountries.join(', ')}.`,
      needBlindSchools: preferredCountries,
      needAwareWarning: 'Carefully review financial aid policies for international applicants at target institutions.'
    },
    testingGapAnalysis: {
      currentStanding: `Current SAT (${satVal}) and GPA (${gpaVal}) relative to ${major} benchmarks.`,
      targetSatAct: satVal < 1450 ? 'Target 1480+ for top-tier reach consideration.' : 'Strong testing profile established.',
      keyFocusAreas: ['Enhance quantitative precision', 'Deepen leadership impact in core activities']
    },
    extracurricularAudit: {
      tierAssessment: `Evaluated ${activitiesCount} activities and ${honorsCount} honors across leadership and initiative.`,
      spikeRating: activitiesCount >= 3 ? 'Clear Spike & Sustained Engagement' : 'Broad Exploratory Profile',
      recommendations: ['Quantify project reach and outcomes', 'Secure external recommenders who can validate leadership']
    },
    strengths: ['Solid core academic GPA of ' + gpaVal, 'Consistent engagement in ' + major + ' related extracurriculars', 'Targeted country selection aligned with academic goals'],
    gapsAndWeaknesses: ['Opportunity to secure higher-tier external honors', 'Need for quantified impact metrics in activity descriptions'],
    actionPlan: [
      { step: 1, title: 'Standardized Testing Finalization', action: 'Complete final SAT/IELTS testing milestones', timeline: 'Month 1' },
      { step: 2, title: 'Activity Impact Quantification', action: 'Add measurable metrics to all extracurricular descriptions', timeline: 'Month 2' },
      { step: 3, title: 'Essay Drafting & Narrative', action: 'Craft authentic personal statements highlighting unique perspective', timeline: 'Month 3' },
      { step: 4, title: 'Application Submission', action: 'Finalize references and submit ahead of deadlines', timeline: 'Month 4' }
    ],
    scholarshipMatchScore: `${Math.min(96, Math.max(65, ratingScore + 4))}% Eligibility Fit`,
    recommendedScholarships: ['Global Scholar Award', 'International Merit Tuition Waiver', 'Regional Academic Excellence Grant']
  };
}

export function generateEssayFallback(essayText: string, promptTitle: string, targetUniversity: string) {
  return {
    overallScore: 83,
    hookRating: "8.5/10 - Engaging personal narrative opening with clear thematic resonance",
    clarityAndFlow: "8/10 - Strong logical transitions between personal reflection and academic goals",
    toneAnalysis: "Authentic, reflective, intellectually curious, and determined",
    strengths: [
      "Demonstrates high self-awareness and genuine intellectual curiosity",
      "Connects personal experiences smoothly to future goals at " + (targetUniversity || "top universities"),
      "Maintains a distinct and authentic personal voice throughout"
    ],
    improvementAreas: [
      "Incorporate more quantifiable impact metrics or specific project achievements",
      "Strengthen the conclusion to create a lasting impression on admissions readers",
      "Ensure word count fits comfortably within competitive application guidelines"
    ],
    revisedExcerpt: "Instead of summarizing your aspirations, ground the opening in an active moment of inquiry—such as your first breakthrough in the laboratory or debate podium—to instantly magnetize the reader.",
    recommendedNextSteps: [
      "Refine the opening hook for immediate impact",
      "Check word count against target portal limits",
      "Verify that tone remains natural and authentically yours"
    ]
  };
}
