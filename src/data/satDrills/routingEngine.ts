import { SatDrillQuestion, StudentQuestionResponse, SatSection } from './types';

// Central Configurable Adaptive Thresholds
export const ADAPTIVE_ROUTING_CONFIG = {
  RW_HIGH_THRESHOLD: 0.58, // Performance index threshold to qualify for Module 2 Higher
  MATH_HIGH_THRESHOLD: 0.58,
  
  // Scoring parameters for practice estimation
  RW_BASE_SCORE: 200,
  RW_MAX_SCORE: 800,
  MATH_BASE_SCORE: 200,
  MATH_MAX_SCORE: 800,
};

/**
 * Calculates a weighted performance index from Module 1 responses.
 * Uses question difficulty, discrimination estimates, and response accuracy.
 */
export function calculateRoutingScore(
  questions: SatDrillQuestion[],
  responses: Record<string, StudentQuestionResponse>
): { routingScore: number; isHigherRoute: boolean; totalCorrect: number; totalAttempted: number } {
  if (!questions.length) {
    return { routingScore: 0, isHigherRoute: false, totalCorrect: 0, totalAttempted: 0 };
  }

  let totalWeightedPoints = 0;
  let maxPossibleWeightedPoints = 0;
  let totalCorrect = 0;
  let totalAttempted = 0;

  questions.forEach((q) => {
    const resp = responses[q.id];
    const difficultyWeight = 1 + (q.difficulty - 1) * 0.15; // e.g. diff 1=1.0, 3=1.3, 5=1.6
    const discrimination = q.discriminationEstimate || 1.0;
    const itemWeight = difficultyWeight * discrimination;

    maxPossibleWeightedPoints += itemWeight;

    if (resp) {
      totalAttempted++;
      if (resp.isCorrect) {
        totalCorrect++;
        totalWeightedPoints += itemWeight;
      }
    }
  });

  const accuracy = totalAttempted > 0 ? totalCorrect / questions.length : 0;
  const weightedRatio = maxPossibleWeightedPoints > 0 ? totalWeightedPoints / maxPossibleWeightedPoints : 0;

  // Composite Routing Score blending raw accuracy (60%) and weighted difficulty performance (40%)
  const routingScore = accuracy * 0.6 + weightedRatio * 0.4;

  const threshold = questions[0]?.section === 'Math'
    ? ADAPTIVE_ROUTING_CONFIG.MATH_HIGH_THRESHOLD
    : ADAPTIVE_ROUTING_CONFIG.RW_HIGH_THRESHOLD;

  const isHigherRoute = routingScore >= threshold;

  return {
    routingScore,
    isHigherRoute,
    totalCorrect,
    totalAttempted,
  };
}

/**
 * Estimates a practice score range (200-800 per section) based on Module 1 + Module 2 performance.
 * Higher Module 2 provides access to top score bands (620-800), while Lower Module 2 caps at 650.
 */
export function calculateEstimatedSectionScore(
  m1Result: { totalCorrect: number; totalQuestions: number; routeChosen: 'Higher' | 'Lower' },
  m2Result: { totalCorrect: number; totalQuestions: number },
  section: SatSection
): number {
  const m1Ratio = m1Result.totalQuestions > 0 ? m1Result.totalCorrect / m1Result.totalQuestions : 0;
  const m2Ratio = m2Result.totalQuestions > 0 ? m2Result.totalCorrect / m2Result.totalQuestions : 0;

  if (m1Result.routeChosen === 'Higher') {
    // Higher route: Scaled from 520 to 800
    const base = 520;
    const bonusM1 = m1Ratio * 140; // up to +140
    const bonusM2 = m2Ratio * 140; // up to +140
    return Math.min(800, Math.round((base + bonusM1 + bonusM2) / 10) * 10);
  } else {
    // Lower route: Scaled from 200 to 650
    const base = 200;
    const bonusM1 = m1Ratio * 220; // up to +220
    const bonusM2 = m2Ratio * 230; // up to +230
    return Math.min(650, Math.round((base + bonusM1 + bonusM2) / 10) * 10);
  }
}
