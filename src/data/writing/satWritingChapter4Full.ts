import { FullSatWritingChapter } from './satWritingTypes';
import {
  THEORY_BLOCK_1,
  THEORY_BLOCK_2,
  THEORY_BLOCK_3,
  THEORY_BLOCK_4
} from './satWritingChapter4Part1';
import {
  THEORY_BLOCK_5,
  THEORY_BLOCK_6,
  THEORY_BLOCK_7
} from './satWritingChapter4Part2';
import {
  THEORY_BLOCK_8,
  THEORY_BLOCK_9,
  THEORY_BLOCK_10
} from './satWritingChapter4Part3';
import {
  EXERCISE_BLOCK_1,
  EXERCISE_BLOCK_2,
  EXERCISE_BLOCK_3,
  EXERCISE_BLOCK_4,
  EXERCISE_BLOCK_5,
  EXERCISE_BLOCK_6
} from './satWritingChapter4QuestionsPart1';
import {
  EXERCISE_BLOCK_7,
  EXERCISE_BLOCK_8,
  EXERCISE_BLOCK_9,
  EXERCISE_BLOCK_10
} from './satWritingChapter4QuestionsPart2';

export const SAT_WRITING_CHAPTER_4_FULL: FullSatWritingChapter = {
  chapterNumber: 4,
  chapterTitle: 'Modifiers, Comparisons & Parallelism',
  subtitle: 'The Complete System for Modifiers, Comparisons, and Structural Parallelism',
  introduction: 'Chapter 4 teaches the advanced sentence-editing skills required to master modifier placement, modifier logic, like-with-like comparisons, demonstrative reference (that of / those of), correlative conjunction pairs, and sentence-level parallelism across 10 sequential blocks.',
  purpose: 'To establish absolute precision over modifier logic, comparative category matching, and structural parallelism on the Digital SAT.',
  masterPrinciple: 'Do not judge a sentence by how similar its words look. Judge it by the grammatical relationship between the structures being connected.',
  theoryBlocks: [
    THEORY_BLOCK_1,
    THEORY_BLOCK_2,
    THEORY_BLOCK_3,
    THEORY_BLOCK_4,
    THEORY_BLOCK_5,
    THEORY_BLOCK_6,
    THEORY_BLOCK_7,
    THEORY_BLOCK_8,
    THEORY_BLOCK_9,
    THEORY_BLOCK_10
  ],
  exerciseBlocks: [
    EXERCISE_BLOCK_1,
    EXERCISE_BLOCK_2,
    EXERCISE_BLOCK_3,
    EXERCISE_BLOCK_4,
    EXERCISE_BLOCK_5,
    EXERCISE_BLOCK_6,
    EXERCISE_BLOCK_7,
    EXERCISE_BLOCK_8,
    EXERCISE_BLOCK_9,
    EXERCISE_BLOCK_10
  ],
  masterChecklist: [
    'I can identify what each modifier describes and verify its logical placement.',
    'I can identify and repair dangling modifiers by placing the logical actor immediately after the comma.',
    'I know how to distinguish essential (no commas) from nonessential (enclosed in commas) clauses.',
    'I can apply the Like-With-Like rule to avoid comparing people to things or activities to institutions.',
    'I use "that of" for singular/uncountable nouns and "those of" for plural nouns in comparisons.',
    'I know the rules for "fewer vs. less" and "number vs. amount".',
    'I can identify coordinating conjunctions (and, or, but, nor) and match the grammatical forms on both sides.',
    'I apply the Mirror Technique to correlative pairs (both...and, either...or, neither...nor, not only...but also).',
    'I use the Skeleton Method to strip modifiers and verify parallelism across long or nested sentences.',
    'I know when to use gerunds after prepositions ("objected to changing and repeating").',
    'I recognize required auxiliary inversion after initial restrictive expressions ("Not only did they...").'
  ],
  completionSummary: 'Chapter 4 is fully integrated with 10 sequential content blocks and 70 SAT-style practice questions.'
};
