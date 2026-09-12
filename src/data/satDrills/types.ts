export type SatSection = 'Reading & Writing' | 'Math';
export type SatModuleType = 'Module 1' | 'Module 2';
export type SatRouteType = 'base' | 'Lower' | 'Higher';
export type SatResponseType = 'MCQ' | 'SPR'; // MCQ = Multiple Choice, SPR = Student-Produced Response

export interface SatDrillQuestion {
  id: string; // e.g. 'd1_rw_m1_q1'
  drillId: number; // 1, 2, 3, 4, 5
  section: SatSection;
  module: SatModuleType;
  route: SatRouteType; // 'base' for Module 1, 'Lower' or 'Higher' for Module 2
  questionNumber: number;
  domain: string; // e.g. 'Information and Ideas', 'Algebra'
  skill: string; // e.g. 'Inferences', 'Linear equations'
  subskill?: string;
  difficulty: number; // 1 (Very Easy) to 5 (Very Hard / 1600-level)
  passage?: string; // Optional passage text for R&W or context
  stimulus?: string; // Optional table/graph description
  questionText: string;
  choices?: string[]; // 4 options for MCQ
  correctAnswer: string; // 'A', 'B', 'C', 'D' for MCQ, or exact string/number for SPR
  explanation: string;
  responseType: SatResponseType;
  discriminationEstimate?: number; // IRT-style discrimination factor e.g. 0.8 to 1.8
  estimatedTimeSeconds?: number; // e.g. 70s for R&W, 95s for Math
}

export interface StudentQuestionResponse {
  questionId: string;
  studentAnswer: string; // 'A' | 'B' | 'C' | 'D' or SPR value
  isCorrect: boolean;
  timeSpentSeconds: number;
  flaggedForReview: boolean;
}

export interface ModuleSessionResult {
  drillId: number;
  section: SatSection;
  module: SatModuleType;
  route: SatRouteType;
  responses: Record<string, StudentQuestionResponse>; // questionId -> response
  totalQuestions: number;
  totalCorrect: number;
  accuracyPercent: number;
  timeRemainingSeconds: number;
  completedAt: string;
}

export interface FullDrillResult {
  drillId: number;
  completedAt: string;
  rwModule1: ModuleSessionResult;
  rwModule2: ModuleSessionResult;
  mathModule1: ModuleSessionResult;
  mathModule2: ModuleSessionResult;
  estimatedRwScore: number; // 200 - 800 estimate
  estimatedMathScore: number; // 200 - 800 estimate
  estimatedTotalScore: number; // 400 - 1600 estimate
  domainBreakdown: Record<string, { total: number; correct: number }>;
  skillBreakdown: Record<string, { total: number; correct: number }>;
}

export interface DrillActiveSessionSave {
  drillId: number;
  lastUpdated: string;
  currentSection: SatSection;
  currentModule: SatModuleType;
  currentRoute: SatRouteType;
  activeQuestionIndex: number;
  timeRemaining: number;
  responses: Record<string, StudentQuestionResponse>;
  rwM1Result: ModuleSessionResult | null;
  rwM2Result: ModuleSessionResult | null;
  mathM1Result: ModuleSessionResult | null;
}

export interface DrillMetadata {
  id: number;
  title: string;
  description: string;
  totalQuestions: number; // 147
  rwQuestionsCount: number; // 81
  mathQuestionsCount: number; // 66
  estimatedTimeMinutes: number; // ~134 mins full test
  status: 'Not Started' | 'In Progress' | 'Completed';
  lastScore?: number;
  bestScore?: number;
}

