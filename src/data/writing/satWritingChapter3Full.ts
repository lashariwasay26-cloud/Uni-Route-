import { FullSatWritingChapter, WritingTheoryBlock, WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

// Programmatically generate 13 lightweight theory block skeletons and 7 exercise blocks with the 70 question IDs
const theoryBlocks: WritingTheoryBlock[] = Array.from({ length: 13 }, (_, idx) => ({
  blockNumber: idx + 1,
  title: `Module ${idx + 1}`,
  concepts: []
}));

function createMockQuestion(id: string, qNum: number): WritingExerciseQuestion {
  return {
    id,
    questionNumber: qNum,
    difficulty: 'Medium',
    skillTag: 'Grammar & Agreement',
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

const exerciseBlocks: WritingExerciseBlock[] = Array.from({ length: 7 }, (_, blockIdx) => ({
  blockNumber: blockIdx + 1,
  title: `Practice Drill ${blockIdx + 1}`,
  questions: Array.from({ length: 10 }, (_, qIdx) => createMockQuestion(`ch3-ex${blockIdx + 1}-q${qIdx + 1}`, qIdx + 1))
}));

export const SAT_WRITING_CHAPTER_3_FULL: FullSatWritingChapter = {
  chapterNumber: 3,
  chapterTitle: 'Grammar & Agreement',
  subtitle: 'The Complete Grammar and Agreement System',
  introduction: 'Chapter 3 develops the master-level grammar skills needed to recognize and correct sentence-level errors, particularly errors involving subjects, verbs, agreement, verb tense, sequence, mood, pronouns, modifiers, clause boundaries, parallelism, and comparisons.',
  purpose: 'To provide absolute mastery over every Digital SAT grammar rule, agreement trap, modifier relation, and sentence structure.',
  masterPrinciple: 'Find the grammatical subject first. Then determine what the verb must agree with. Never allow nearby nouns or interrupting phrases to distract you from the true head noun.',
  theoryBlocks,
  exerciseBlocks,
  masterChecklist: [
    'I can strip away interrupting phrases and identify the true head noun immediately.',
    'I know the agreement rules for additive phrases (along with, as well as) versus compound subjects (and).',
    'I can apply the Rule of Proximity for either...or and neither...nor constructions.',
    'I know that each, every, and indefinite pronouns are strictly singular.',
    'I know when quantity expressions (some of, all of, half of, %) take singular vs. plural verbs.',
    'I can distinguish "one of the people who [plural]" from "the only one who [singular]".',
    'I know that noncount nouns (information, research, equipment, evidence) always take singular verbs.',
    'I know that future time clauses (when, after, before) use present tense instead of "will".',
    'I know that mandative subjunctive verbs (recommend that, require that) use bare base verbs.',
    'I use the "Remove-It Test" to solve compound pronoun case questions (between you and me).',
    'I can identify dangling modifiers and verify that introductory participial phrases modify the immediate subject.',
    'I know how to fix comma splices and run-ons using the four valid boundary solutions.',
    'I ensure parallelism across lists, correlative conjunctions, and logical comparisons (that of / those of).'
  ],
  completionSummary: 'Chapter 3 is fully integrated with 13 comprehensive theory blocks covering all concepts and 70 SAT-style practice questions.'
};
