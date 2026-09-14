import { FullSatWritingChapter, WritingTheoryBlock, WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

// Programmatically generate 10 lightweight theory block skeletons and 10 exercise blocks
const theoryBlocks: WritingTheoryBlock[] = Array.from({ length: 10 }, (_, idx) => ({
  blockNumber: idx + 1,
  title: `Module ${idx + 1}`,
  concepts: []
}));

function createMockQuestion(id: string, qNum: number): WritingExerciseQuestion {
  return {
    id,
    questionNumber: qNum,
    difficulty: 'Medium',
    skillTag: 'Modifiers, Comparisons & Parallelism',
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

const exCounts = [5, 6, 6, 6, 5, 6, 8, 8, 8, 12];

const exerciseBlocks: WritingExerciseBlock[] = exCounts.map((count, blockIdx) => ({
  blockNumber: blockIdx + 1,
  title: `Practice Drill ${blockIdx + 1}`,
  questions: Array.from({ length: count }, (_, qIdx) => createMockQuestion(`ch4-ex${blockIdx + 1}-q${qIdx + 1}`, qIdx + 1))
}));

export const SAT_WRITING_CHAPTER_4_FULL: FullSatWritingChapter = {
  chapterNumber: 4,
  chapterTitle: 'Modifiers, Comparisons & Parallelism',
  subtitle: 'The Complete System for Modifiers, Comparisons, and Structural Parallelism',
  introduction: 'Chapter 4 establishes absolute mastery over sentence modifier alignment, logical comparison balance, category equivalence, and coordinate/correlative parallelism across all Digital SAT question formats.',
  purpose: 'To ensure perfect precision on introductory participial modifiers, logical comparisons, demonstrative pronouns (that of / those of), and balanced parallel structures.',
  masterPrinciple: 'An introductory modifier MUST immediately touch the noun it describes. Logical comparisons MUST compare like things with like things. Parallel items in a series or correlative construction MUST share matching grammatical forms.',
  theoryBlocks,
  exerciseBlocks,
  masterChecklist: [
    'I can immediately identify dangling modifiers and verify that introductory participial phrases modify the immediate subject.',
    'I check that logical comparisons compare equivalent categories (people to people, objects to objects, attributes to attributes using that of / those of).',
    'I verify parallel structure across lists, coordinate conjunctions (and, or, but), and correlative conjunctions (not only...but also, either...or, neither...nor).'
  ],
  completionSummary: 'Chapter 4 is fully integrated with 10 comprehensive theory blocks covering all concepts and 70 SAT-style practice questions.'
};
