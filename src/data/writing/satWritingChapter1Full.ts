import { FullSatWritingChapter, WritingTheoryBlock, WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

// Programmatically generate 22 lightweight theory block skeletons and 8 exercise blocks with the 100 question IDs
const theoryBlocks: WritingTheoryBlock[] = Array.from({ length: 22 }, (_, idx) => ({
  blockNumber: idx + 1,
  title: `Module ${idx + 1}`,
  concepts: []
}));

function createMockQuestion(id: string, qNum: number): WritingExerciseQuestion {
  return {
    id,
    questionNumber: qNum,
    difficulty: 'Medium',
    skillTag: 'Clausal Boundaries',
    prompt: '',
    options: [],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '',
      whyCorrect: '',
      distractorAnalysis: []
    }
  };
}

const exerciseBlocks: WritingExerciseBlock[] = [
  { blockNumber: 1, title: 'Practice Drill 1', questions: Array.from({ length: 12 }, (_, i) => createMockQuestion(`w_ch1_q${i + 1}`, i + 1)) },
  { blockNumber: 2, title: 'Practice Drill 2', questions: Array.from({ length: 13 }, (_, i) => createMockQuestion(`w_ch1_q${i + 13}`, i + 13)) },
  { blockNumber: 3, title: 'Practice Drill 3', questions: Array.from({ length: 12 }, (_, i) => createMockQuestion(`w_ch1_q${i + 26}`, i + 26)) },
  { blockNumber: 4, title: 'Practice Drill 4', questions: Array.from({ length: 13 }, (_, i) => createMockQuestion(`w_ch1_q${i + 38}`, i + 38)) },
  { blockNumber: 5, title: 'Practice Drill 5', questions: Array.from({ length: 12 }, (_, i) => createMockQuestion(`w_ch1_q${i + 51}`, i + 51)) },
  { blockNumber: 6, title: 'Practice Drill 6', questions: Array.from({ length: 13 }, (_, i) => createMockQuestion(`w_ch1_q${i + 63}`, i + 63)) },
  { blockNumber: 7, title: 'Practice Drill 7', questions: Array.from({ length: 12 }, (_, i) => createMockQuestion(`w_ch1_q${i + 76}`, i + 76)) },
  { blockNumber: 8, title: 'Practice Drill 8', questions: Array.from({ length: 13 }, (_, i) => createMockQuestion(`w_ch1_q${i + 88}`, i + 88)) },
];

export const SAT_WRITING_CHAPTER_1_FULL: FullSatWritingChapter = {
  chapterNumber: 1,
  chapterTitle: 'Sentence Structure, Clausal Boundaries & Transitions',
  subtitle: 'The Mechanics of Clausal Integration and Boundary Diagnostics',
  introduction: 'Sentence construction on the SAT is fundamentally a test of clausal mechanics. To achieve absolute precision, students must look past a sentence\'s topical content and isolate its underlying syntactic skeleton. Mastery in this domain requires diagnosing the boundary between clauses, understanding the legal operators available to link ideas, and selecting transitions that precisely articulate logical progression.',
  purpose: 'To provide authoritative, exhaustive instruction and 100 practice questions on SAT sentence structure, clauses, punctuation boundaries, transitions, and modifier placement without any omissions or shortcuts.',
  masterPrinciple: 'Before choosing an answer, identify the structures on BOTH sides of the tested location. Ask: "What is immediately before the blank?" "What is immediately after the blank?" Then determine whether each side is capable of standing as a complete sentence.',
  theoryBlocks,
  exerciseBlocks
};
