import { ReadingChapter, ReadingModule } from './readingTypes';
import { SAT_READING_ELITE_PASSAGES } from './satReadingElitePassages';

export * from './readingTypes';
export {
  SAT_READING_ELITE_PASSAGES,
};

export const SAT_READING_CHAPTER_1: ReadingChapter = {
  chapterNumber: 1,
  chapterTitle: 'Chapter 1 — Foundations of Reading',
  description: 'Establishes the complete foundational reading system: main idea, central claim, explicit boundaries, author\'s purpose, passage structure, paragraph roles, rhetorical moves, tone, and logical inference.',
  totalModules: 10,
  modules: [],
};

export const SAT_READING_CHAPTER_2: ReadingChapter = {
  chapterNumber: 2,
  chapterTitle: 'Chapter 2 — Evidence & Inference',
  description: 'The master system for evidence tracing and inference: claims, support, paired evidence, inference under uncertainty, competing evidence, distributed clues, correlation vs. causation, authorial qualification, quantitative data, and multi-layer synthesis.',
  totalModules: 10,
  modules: [],
};

export const SAT_READING_CHAPTER_3: ReadingChapter = {
  chapterNumber: 3,
  chapterTitle: 'Chapter 3 — Vocabulary in Context',
  description: 'The definitive, zero-memorization master system for SAT vocabulary: precise substitution, category matching, secondary definitions, tone and connotation, rhetorical function, extended paragraph context, precision traps, technical shifts, metaphors, question archetypes, and elite elimination protocols.',
  totalModules: 12,
  modules: [],
};

export const SAT_READING_CHAPTER_4: ReadingChapter = {
  chapterNumber: 4,
  chapterTitle: 'Chapter 4 — Rhetorical Analysis',
  description: 'The master system for rhetorical analysis: author\'s purpose, central claims, point of view, tone, paragraph roles, rhetorical strategy, evidence function, concessions, qualifications, idea relationships, complete rhetorical architecture, and authorial choices.',
  totalModules: 14,
  modules: [],
};

export const SAT_READING_CHAPTER_5: ReadingChapter = {
  chapterNumber: 5,
  chapterTitle: 'Chapter 5 — Relationships & Synthesis',
  description: 'The definitive master system for paired-passage relationships and multi-text synthesis: individual positions, multi-layer connections, agreement/disagreement, qualification, authorial priorities, shared goals/competing methods, time horizons, and elite synthesis.',
  totalModules: 14,
  modules: [],
};

export const SAT_READING_CHAPTER_6: ReadingChapter = {
  chapterNumber: 6,
  chapterTitle: 'Chapter 6 — Data & Informational Reading',
  description: 'The definitive master system for data and informational reading: reading data as argument, multi-variable tables, complex graphs, text-and-data integration, percentages vs absolute counts, scientific evidence, survey sampling, data limitations, correlation vs causation, multi-source synthesis, rhetorical data use, resolving apparent contradictions, precision, mixed-evidence synthesis, and elite data reasoning.',
  totalModules: 16,
  modules: [],
};

export const SAT_READING_CHAPTERS = [
  {
    chapterNumber: 1,
    title: 'Foundations of Reading',
    status: 'available' as const,
    totalModules: 10,
    subtitle: 'The foundational reading system: main idea, central claim, explicit boundaries, author\'s purpose, structure, paragraph roles, tone, and inference.',
  },
  {
    chapterNumber: 2,
    title: 'Evidence & Inference',
    status: 'available' as const,
    totalModules: 10,
    subtitle: 'The master evidence & inference system: claim-evidence pairs, uncertainty boundaries, competing counterevidence, causation vs correlation, and synthesis.',
  },
  {
    chapterNumber: 3,
    title: 'Vocabulary in Context',
    status: 'available' as const,
    totalModules: 12,
    subtitle: 'The definitive vocabulary system: substitution, category constraints, secondary definitions, connotation, rhetorical functions, precision traps, and elimination.',
  },
  {
    chapterNumber: 4,
    title: 'Rhetorical Analysis',
    status: 'available' as const,
    totalModules: 14,
    subtitle: 'The master rhetorical analysis system: author\'s purpose, central claims, point of view, tone, paragraph roles, rhetorical strategy, evidence function, concessions, qualifications, and architecture.',
  },
  {
    chapterNumber: 5,
    title: 'Relationships & Synthesis',
    status: 'available' as const,
    totalModules: 14,
    subtitle: 'The definitive paired-passage synthesis system: positions, multi-layer relationships, agreement vs disagreement, qualifications, authorial priorities, shared goals, and elite synthesis.',
  },
  {
    chapterNumber: 6,
    title: 'Data & Informational Reading',
    status: 'available' as const,
    totalModules: 16,
    subtitle: 'The master data & informational reading system: data as argument, multi-variable tables, complex graphs, text-data synthesis, percentages vs raw counts, evidence hierarchy, sampling bias, correlation vs causation, multi-source synthesis, and elite data reasoning.',
  },
];
