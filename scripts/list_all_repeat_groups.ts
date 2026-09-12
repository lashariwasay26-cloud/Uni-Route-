import {
  SAT_READING_CHAPTER_1,
  SAT_READING_CHAPTER_2,
  SAT_READING_CHAPTER_3,
  SAT_READING_CHAPTER_4,
  SAT_READING_CHAPTER_5,
  SAT_READING_CHAPTER_6,
  SAT_READING_ELITE_PASSAGES,
} from '../src/data/reading/satReadingData';
import { SAT_WRITING_CHAPTER_1_FULL } from '../src/data/writing/satWritingChapter1Full';
import { SAT_WRITING_CHAPTER_2_FULL } from '../src/data/writing/satWritingChapter2Full';
import { SAT_WRITING_CHAPTER_3_FULL } from '../src/data/writing/satWritingChapter3Full';
import { SAT_WRITING_CHAPTER_4_FULL } from '../src/data/writing/satWritingChapter4Full';
import { SAT_WRITING_CHAPTER_5_FULL } from '../src/data/writing/satWritingChapter5Full';
import { SAT_WRITING_CHAPTER_6_FULL } from '../src/data/writing/satWritingChapter6Full';
import { SAT_WRITING_CHAPTER_7_FULL } from '../src/data/writing/satWritingChapter7Full';
import { FULL_SAT_MATH_BOOK } from '../src/data/satMathBook';
import { ALL_DRILL_QUESTIONS } from '../src/data/satDrills';

const allQuestions: any[] = [];

// 1. Reading
for (const ch of [SAT_READING_CHAPTER_1, SAT_READING_CHAPTER_2, SAT_READING_CHAPTER_3, SAT_READING_CHAPTER_4, SAT_READING_CHAPTER_5, SAT_READING_CHAPTER_6]) {
  for (const mod of ch.modules || []) {
    for (const q of (mod.practiceQuestions || mod.questions || [])) {
      allQuestions.push({ section: 'Reading', id: q.id || q.questionNumber, q });
    }
  }
}
for (const ep of SAT_READING_ELITE_PASSAGES) {
  for (const q of (ep.questions || [])) {
    allQuestions.push({ section: 'Reading Elite', id: q.id || q.questionNumber, q });
  }
}

// 2. Writing
for (const ch of [
  SAT_WRITING_CHAPTER_1_FULL,
  SAT_WRITING_CHAPTER_2_FULL,
  SAT_WRITING_CHAPTER_3_FULL,
  SAT_WRITING_CHAPTER_4_FULL,
  SAT_WRITING_CHAPTER_5_FULL,
  SAT_WRITING_CHAPTER_6_FULL,
  SAT_WRITING_CHAPTER_7_FULL,
]) {
  for (const blk of (ch.exerciseBlocks || [])) {
    for (const q of (blk.questions || [])) {
      allQuestions.push({ section: 'Writing', id: q.id, q });
    }
  }
}

// 3. Math
for (const ch of FULL_SAT_MATH_BOOK) {
  for (const grp of ((ch as any).exerciseGroups || (ch as any).exerciseBlocks || [])) {
    for (const q of (grp.questions || [])) {
      allQuestions.push({ section: 'Math', id: q.id || `${ch.chapterNumber}-${q.number}`, q });
    }
  }
}

// 4. Drills
for (const q of ALL_DRILL_QUESTIONS) {
  allQuestions.push({ section: 'Drills', id: q.id, q });
}

console.log(`Total questions in dataset: ${allQuestions.length}`);

// Group by option choices
const optMap = new Map<string, any[]>();
for (const item of allQuestions) {
  const choices = item.q.options || item.q.choices || [];
  const opts = choices.map((c: any) => typeof c === 'string' ? c : c.text || '');
  if (opts.length >= 4) {
    const key = opts.map((o: string) => o.trim().toLowerCase()).sort().join(' || ');
    if (!optMap.has(key)) optMap.set(key, []);
    optMap.get(key)!.push(item);
  }
}

let repeatCount = 0;
for (const [key, items] of optMap.entries()) {
  if (items.length > 1) {
    repeatCount++;
    console.log(`\nGroup ${repeatCount} (${items.length} questions): [${key}]`);
    items.forEach(it => {
      const prompt = it.q.prompt || it.q.passage || it.q.question || it.q.questionText || '';
      console.log(`  - [${it.section}] ID: ${it.id} (Ans: ${it.q.correctAnswer ?? it.q.correctIndex}) -> "${prompt.substring(0, 60)}..."`);
    });
  }
}
