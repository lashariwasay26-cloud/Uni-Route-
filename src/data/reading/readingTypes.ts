export interface ReadingQuestionOption {
  label: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface ReadingQuestionDistractor {
  optionLabel: string;
  explanation: string;
}

export interface ReadingQuestion {
  id: string;
  questionNumber?: number;
  label?: string; // e.g. "QUESTION:", "QUESTION 1:", "QUESTION 1 — CENTRAL IDEA"
  prompt: string;
  options: ReadingQuestionOption[];
  correctAnswer: string; // 'A' | 'B' | 'C' | 'D'
  correctAnswerIndex: number; // 0, 1, 2, 3
  whyCorrectTitle?: string; // e.g. "WHY B IS CORRECT:", "WHY B IS THE BEST ANSWER:"
  whyCorrect: string;
  educationalObjective?: string;
  trapToAvoid?: string;
  dataFigure?: {
    title: string;
    subtitle?: string;
    headers?: string[];
    columns?: string[];
    rows: (string | number)[][];
    note?: string;
    notes?: string;
  };
  tableData?: {
    title?: string;
    headers?: string[];
    rows: (string | number)[][];
    caption?: string;
    note?: string;
    notes?: string;
  };
  passage?: {
    title?: string;
    intro?: string;
    text: string;
  };
  passageSupport?: string;
  distractorExplanations?: ReadingQuestionDistractor[];
  eliminationShortcut?: string;
  additionalNotes?: string[];
}

export interface ReadingSectionItem {
  id: string;
  sectionTitle?: string;
  sectionNumber?: string;
  content: string[]; // paragraph strings
  bulletPoints?: string[];
  subsections?: {
    subtitle?: string;
    text?: string[];
    bulletPoints?: string[];
  }[];
  passage?: {
    title?: string;
    intro?: string;
    text: string;
  };
  questions?: ReadingQuestion[];
  breakdown?: {
    title?: string;
    steps?: {
      label: string;
      content: string;
    }[];
    notes?: string[];
  };
  structuralMap?: {
    title?: string;
    steps: string[];
  };
  formulaOrComparison?: {
    title?: string;
    leftTitle?: string;
    leftItems?: string[];
    rightTitle?: string;
    rightItems?: string[];
    summary?: string;
  };
  checklist?: {
    title?: string;
    items: string[];
  };
  masterRule?: {
    title?: string;
    text: string[];
  };
  tableData?: {
    title?: string;
    headers?: string[];
    rows: (string | number)[][];
    notes?: string;
  };
  dataFigure?: {
    title: string;
    subtitle?: string;
    headers?: string[];
    columns?: string[];
    rows: (string | number)[][];
    note?: string;
    notes?: string;
  };
}

export interface ReadingModule {
  moduleNumber: number; // 1 through 10
  id: string;
  chapterTitle: string;
  moduleTitle: string;
  centralQuestion?: string;
  sections: ReadingSectionItem[];
  practiceQuestions?: ReadingQuestion[];
  endLabel: string; // e.g. "END OF MODULE 1", "END OF CHAPTER 1 — MODULE 10 OF 10"
}

export interface ReadingChapter {
  chapterNumber: number;
  chapterTitle: string;
  description: string;
  totalModules: number;
  modules: ReadingModule[];
}

export interface EliteReadingPassageQuestion extends ReadingQuestion {
  skillTag: string;
  difficulty: string;
  eliminationShortcut?: string;
  coreReasoning?: string;
}

export interface EliteReadingPassage {
  id: string;
  passageNumber: number;
  title: string;
  domain: string;
  difficulty: string;
  wordCount: number;
  introductoryContext: string;
  passageText: string;
  structuralOutline?: { paragraphNumber: number; role: string }[];
  questions: EliteReadingPassageQuestion[];
}
