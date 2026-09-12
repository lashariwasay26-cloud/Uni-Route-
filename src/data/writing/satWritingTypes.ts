export type WritingDifficulty = 'Foundation' | 'Intermediate' | 'Medium' | 'Advanced' | 'Hard' | 'Elite';

export interface WritingTheoryConcept {
  id: string;
  title: string;
  sectionNumber?: number | string;
  fullText: string;
  bulletPoints?: string[];
  rules?: string[];
  examples?: {
    label?: string;
    sentence?: string;
    explanation?: string;
    isCorrect?: boolean;
  }[];
  tables?: {
    title?: string;
    headers: string[];
    rows: string[][];
  }[];
  checklist?: string[];
  traps?: string[];
  shortcuts?: string[];
}

export interface WritingTheoryBlock {
  blockNumber: number;
  title: string;
  description?: string;
  concepts: WritingTheoryConcept[];
}

export interface WritingQuestionOption {
  text: string;
  isCorrect?: boolean;
  explanation?: string;
}

export interface WritingExerciseQuestion {
  questionNumber: number;
  id: string;
  difficulty: WritingDifficulty;
  skillTag: string;
  prompt: string;
  underlinedText?: string;
  contextSentence?: string;
  dataFigure?: {
    title: string;
    subtitle?: string;
    headers: string[];
    rows: (string | number)[][];
    note?: string;
  };
  options: string[];
  correctAnswer: number; // 0-indexed (0=A, 1=B, 2=C, 3=D)
  explanation: {
    coreReasoning: string;
    educationalObjective?: string;
    beforeAndAfterAnalysis?: {
      before: string;
      after: string;
    };
    whyCorrect: string;
    distractorAnalysis: {
      optionIndex: number;
      optionLabel: string;
      optionText: string;
      whyWrong: string;
    }[];
    eliminationShortcut?: string;
    trapToAvoid?: string;
  };
}

export interface WritingExerciseBlock {
  blockNumber: number;
  title: string;
  description?: string;
  questions: WritingExerciseQuestion[];
  scoreGuide?: {
    range: string;
    status: string;
  }[];
  checklists?: string[];
}

export interface FullSatWritingChapter {
  chapterNumber: number;
  chapterTitle: string;
  subtitle: string;
  introduction: string;
  purpose: string;
  masterPrinciple: string;
  theoryBlocks: WritingTheoryBlock[];
  exerciseBlocks: WritingExerciseBlock[];
  masterChecklist?: string[];
  completionSummary?: string;
}
