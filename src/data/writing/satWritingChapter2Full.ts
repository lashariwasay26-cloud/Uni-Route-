import { FullSatWritingChapter, WritingTheoryBlock, WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

// Programmatically generate 18 lightweight theory block skeletons and 3 exercise blocks with the 100 question IDs
const theoryBlocks: WritingTheoryBlock[] = Array.from({ length: 18 }, (_, idx) => ({
  blockNumber: idx + 1,
  title: `Module ${idx + 1}`,
  concepts: []
}));

function createMockQuestion(id: string, qNum: number): WritingExerciseQuestion {
  return {
    id,
    questionNumber: qNum,
    difficulty: 'Medium',
    skillTag: 'Punctuation Boundaries',
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
  { blockNumber: 19, title: 'Practice Drill 19', questions: Array.from({ length: 30 }, (_, i) => createMockQuestion(`ch2-ex19-q${i + 1}`, i + 1)) },
  { blockNumber: 20, title: 'Practice Drill 20', questions: Array.from({ length: 30 }, (_, i) => createMockQuestion(`ch2-ex20-q${i + 1}`, i + 1)) },
  { blockNumber: 21, title: 'Practice Drill 21', questions: Array.from({ length: 40 }, (_, i) => createMockQuestion(`ch2-ex21-q${i + 1}`, i + 1)) },
];

export const SAT_WRITING_CHAPTER_2_FULL: FullSatWritingChapter = {
  chapterNumber: 2,
  chapterTitle: 'Punctuation, Structural Boundaries & Typographic Logic',
  subtitle: 'The Systematic Rules of Comma Restraints, Colons, Dashes, and Possessive Inflections',
  introduction: 'Punctuation is not a transcription of audible breaths; it is a system of architectural boundaries that defines the structural relationship between sentence elements. This chapter establishes a complete logical matrix to govern comma insertion, coordinate lists, emphatic appositives, and possessive inflections.',
  purpose: 'To provide absolute mastery over every SAT punctuation boundary and relationship.',
  masterPrinciple: 'Punctuation marks are not decorative pauses; they establish strict grammatical boundaries and logical relationships between clauses, phrases, and modifiers.',
  theoryBlocks,
  exerciseBlocks,
  masterChecklist: [
    'I can perform the Independent-Clause Test rapidly on any sentence boundary.',
    'I recognize comma splices immediately and know the four valid solutions.',
    'I know how to punctuate introductory dependent clauses, phrases, and transitions.',
    'I can distinguish essential (restrictive) from nonessential (nonrestrictive) modifiers.',
    'I use the "Remove-It Test" to verify paired punctuation (commas, dashes, parentheses).',
    'I know the complete-thought rule for colons and when to use colons for lists/explanations.',
    'I use semicolons only between independent clauses or in complex series with internal commas.',
    'I can distinguish possessive singular (noun\'s), possessive plural (nouns\'), and ordinary plural (nouns).',
    'I know that possessive pronouns (its, whose, theirs, yours) NEVER take apostrophes.',
    'I never insert a comma between a subject and verb, or a verb and its direct object.'
  ],
  completionSummary: `CHAPTER 2 COMPLETION SUMMARY:
Congratulations! You have completed Chapter 2 — Punctuation.
You have mastered the complete structural punctuation decision system, including sentence boundary rules, comma usage and restrictions, colons, semicolons, dashes, apostrophes, and complex punctuation interaction.
With 18 theory blocks and 100 targeted practice questions completed, your punctuation execution is now primed for high precision on the Digital SAT.`
};
