export type HubId = 'overview' | 'scholarship' | 'sat' | 'essay' | 'pakistani' | 'ai-analysis';

export interface FloatingHubItem {
  id: HubId;
  title: string;
  shortLabel: string;
  iconName: string;
  description: string;
  badge: string;
  colorTheme: string;
  gradient: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  country: string;
  degree: 'Undergraduate' | 'Masters' | 'PhD' | 'All Levels';
  coverage: 'Full Ride' | 'Full Tuition' | 'Partial' | 'Stipend Only';
  amount: string;
  deadline: string;
  description: string;
  eligibility: string[];
  documentsRequired: string[];
  applicationUrl: string;
  isPakistani: boolean;
  category: string;
  featured?: boolean;
}

export interface SatQuestion {
  id: string;
  section: 'Reading' | 'Writing' | 'Math' | 'Reading & Writing' | 'Drills';
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  codeOrMathSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SatFlashcard {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  exampleSentence: string;
  synonyms: string[];
}

export interface EssayPrompt {
  id: string;
  source: string;
  title: string;
  promptText: string;
  tips: string[];
}

export interface SampleEssay {
  id: string;
  title: string;
  university: string;
  prompt: string;
  essayText: string;
  keyStrengths: string[];
  wordCount: number;
}

export interface UniversityMatchEvaluation {
  name: string;
  country: string;
  chancePercentage: string; // e.g. "12% - Reach"
  category: 'Reach' | 'Target' | 'Safety';
  rationale: string;
  aidPolicy: string; // e.g. "Need-Blind for Internationals" vs "Need-Aware"
  databaseMatch?: boolean;
  scholarshipTitle?: string;
  acceptanceRate?: string;
  officialBenchmarkComparison?: string; // Common Data Set 25th-75th comparison
  admittedProfileReality?: string;      // Realistic profile of who actually gets selected
}

export interface ActivityItem {
  id: string;
  role: string;          // e.g. "Founder & Lead Developer"
  organization: string;  // e.g. "AI Voice Accessibility Initiative"
  activityType: string;  // e.g. "Community Service / Tech / Research / Athletics / School Club"
  description: string;   // Quantifiable impact, metrics, scale
  timeCommitment?: string; // e.g. "10 hrs/wk, 36 wks/yr"
  gradeLevels?: string;  // e.g. "10, 11, 12"
}

export interface HonorItem {
  id: string;
  title: string;         // e.g. "National Informatics Olympiad"
  level: 'International' | 'National' | 'State / Regional' | 'School / Community';
  gradeLevel?: string;   // e.g. "11, 12"
  description?: string;  // e.g. "Rank 1 / Gold Medal out of 3,200 national participants"
}

export interface ProfileAnalysisInput {
  fullName?: string;
  curriculum?: string;
  curriculumDetails?: string;
  gpa: string;
  gpaScale: string;
  classRankPercentile?: string;
  satScore: string;
  satBreakdown?: { ebrw?: string; math?: string };
  actScore?: string;
  testOptional?: boolean;
  englishTestType?: 'IELTS' | 'TOEFL' | 'Duolingo (DET)' | 'Exempt / English Native';
  englishTestScore?: string;
  intendedMajor: string;
  preferredCountries: string[];
  activitiesList?: ActivityItem[];
  honorsList?: HonorItem[];
  extracurriculars?: string;
  spikeArea?: string;
  honorsAndAwards?: string;
  financialNeed: 'High' | 'Moderate' | 'Low' | 'None';
  efcAnnualUsd?: string;
  academicLevel: 'High School Senior' | 'High School Junior' | 'Undergraduate Student' | 'Graduate/Master Applicant';
  specificConcerns?: string;
}

export interface ProfileAnalysisResult {
  overallRating: string;
  ratingScore: number; // e.g. 85 / 100
  profileArchetype?: string;
  summary: string;
  reachUniversities: UniversityMatchEvaluation[];
  targetUniversities: UniversityMatchEvaluation[];
  safetyUniversities: UniversityMatchEvaluation[];
  needBlindAnalysis?: {
    isNeedSensitive: boolean;
    advice: string;
    needBlindSchools: string[];
    needAwareWarning?: string;
  };
  testingGapAnalysis?: {
    currentStanding: string;
    targetSatAct: string;
    keyFocusAreas: string[];
  };
  extracurricularAudit?: {
    tierAssessment: string;
    spikeRating: string;
    recommendations: string[];
  };
  strengths: string[];
  gapsAndWeaknesses: string[];
  actionPlan: { step: number; title: string; action: string; timeline: string }[];
  scholarshipMatchScore: string;
  recommendedScholarships: string[];
  groundedSources?: { title: string; uri?: string }[];
}

export interface EssayFeedbackResult {
  overallScore: number;
  hookRating: string;
  clarityAndFlow: string;
  toneAnalysis: string;
  strengths: string[];
  improvementAreas: string[];
  revisedExcerpt?: string;
  recommendedNextSteps: string[];
}

export type EssayType =
  | 'Common App Essay'
  | 'Supplemental Essays'
  | 'Scholarship Essays'
  | 'Personal Statement'
  | 'Why This University?'
  | 'Why This Major?'
  | 'Other';

export type BuilderStage = 'prompt' | 'brainstorm' | 'draft' | 'review';

export interface BrainstormAnswer {
  id: string;
  question: string;
  answer: string;
  isCustom?: boolean;
}

export interface EssayCategoryFeedback {
  category: string;
  status: 'Strong' | 'Good' | 'Needs Attention';
  summary: string;
  whatWorks: string;
  whatIsMissing: string;
  suggestedImprovement: string;
}

export interface PriorityImprovement {
  id: string;
  issue: string;
  whyItMatters: string;
  tryThis: string;
  paragraphIndex?: number;
}

export interface ParagraphReviewItem {
  paragraphNumber: number;
  purposeLabel: string;
  textSnippet: string;
  works: string;
  consider: string;
}

export interface StructuredEssayAnalysis {
  wordCount: number;
  wordLimit: number;
  paragraphCount: number;
  promptAlignmentStatus: 'Strong' | 'Good' | 'Needs Attention';
  mainStrengths: string[];
  mainAreasToImprove: string[];
  categories: EssayCategoryFeedback[];
  strengths: string[];
  priorityImprovements: PriorityImprovement[];
  paragraphReviews: ParagraphReviewItem[];
  checklist: { id: string; label: string; checked: boolean }[];
  analyzedAt: string;
}

export interface EssayDraft {
  id: string;
  title: string;
  essayType: EssayType;
  prompt: string;
  wordLimit: number;
  brainstormAnswers: BrainstormAnswer[];
  draftText: string;
  currentStage: BuilderStage;
  progressPercent: number;
  createdAt: string;
  updatedAt: string;
  lastAnalysis?: StructuredEssayAnalysis;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
