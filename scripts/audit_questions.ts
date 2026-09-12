import * as fs from 'fs';
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

const readingChapters = [
  SAT_READING_CHAPTER_1,
  SAT_READING_CHAPTER_2,
  SAT_READING_CHAPTER_3,
  SAT_READING_CHAPTER_4,
  SAT_READING_CHAPTER_5,
  SAT_READING_CHAPTER_6,
];

const writingChapters = [
  SAT_WRITING_CHAPTER_1_FULL,
  SAT_WRITING_CHAPTER_2_FULL,
  SAT_WRITING_CHAPTER_3_FULL,
  SAT_WRITING_CHAPTER_4_FULL,
  SAT_WRITING_CHAPTER_5_FULL,
  SAT_WRITING_CHAPTER_6_FULL,
  SAT_WRITING_CHAPTER_7_FULL,
];

interface AuditIssue {
  section: 'Reading' | 'Writing' | 'Math' | 'Drills';
  location: string;
  category: 'Repetitive Pattern' | 'AI Fingerprint / Cliche' | 'Placeholder / Template / Hallucination' | 'Wrong Answer Explanation / Mismatch';
  description: string;
  questionSnippet?: string;
  correctAnswer?: string;
  explanationSnippet?: string;
}

const allIssues: AuditIssue[] = [];

function extractTextFromAny(val: any): string {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  if (Array.isArray(val)) return val.map(extractTextFromAny).join(' ');
  if (typeof val === 'object') {
    return Object.values(val).map(extractTextFromAny).join(' ');
  }
  return '';
}

function normalizeAnswerToLetter(ans: any, correctIndex?: any): string {
  if (correctIndex !== undefined && correctIndex !== null) {
    if (correctIndex === 0 || correctIndex === '0') return 'A';
    if (correctIndex === 1 || correctIndex === '1') return 'B';
    if (correctIndex === 2 || correctIndex === '2') return 'C';
    if (correctIndex === 3 || correctIndex === '3') return 'D';
  }
  if (ans === 0 || ans === '0') return 'A';
  if (ans === 1 || ans === '1') return 'B';
  if (ans === 2 || ans === '2') return 'C';
  if (ans === 3 || ans === '3') return 'D';
  if (typeof ans === 'string') {
    const trimmed = ans.trim().toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(trimmed)) return trimmed;
    return trimmed;
  }
  return String(ans ?? '').trim().toUpperCase();
}

function checkAIClichés(text: string, location: string, section: any, qSnippet: string) {
  const cliches = [
    { pattern: /\bserves as a testament\b/i, phrase: '"serves as a testament"' },
    { pattern: /\ba testament to\b/i, phrase: '"a testament to"' },
    { pattern: /\bdelve into\b/i, phrase: '"delve into"' },
    { pattern: /\bvibrant tapestry\b/i, phrase: '"vibrant tapestry"' },
    { pattern: /\bbeacon of\b/i, phrase: '"beacon of"' },
    { pattern: /\bunpack the\b/i, phrase: '"unpack the"' },
    { pattern: /\bit is important to remember\b/i, phrase: '"it is important to remember"' },
    { pattern: /\bintricate dance\b/i, phrase: '"intricate dance"' },
    { pattern: /\bharness the power\b/i, phrase: '"harness the power"' },
  ];

  for (const c of cliches) {
    if (c.pattern.test(text)) {
      allIssues.push({
        section,
        location,
        category: 'AI Fingerprint / Cliche',
        description: `Contains repetitive AI cliché phrase: ${c.phrase}`,
        questionSnippet: qSnippet.substring(0, 120),
      });
    }
  }
}

function checkPlaceholders(text: string, location: string, section: any, qSnippet: string) {
  const placeholderPatterns = [
    /\[TODO\]/i,
    /\[insert\b/i,
    /\[placeholder\b/i,
    /\[tbd\]/i,
    /\bundefined\b/i,
    /\bNaN\b/,
    /\[figure\s+here\]/i,
    /\[image\s+here\]/i,
    /\[graph\s+here\]/i,
    /\[table\s+here\]/i,
    /\[passage\s+here\]/i,
    /\bLorem ipsum\b/i,
  ];

  for (const p of placeholderPatterns) {
    if (p.test(text)) {
      if (section === 'Math' && p.toString().includes('undefined') && /slope|denominator|function|expression|tangent|divided by zero/i.test(text)) {
        continue;
      }
      allIssues.push({
        section,
        location,
        category: 'Placeholder / Template / Hallucination',
        description: `Found template/placeholder token matching ${p.toString()}`,
        questionSnippet: qSnippet.substring(0, 120),
      });
    }
  }
}

// 1. Reading Audit
let readingCount = 0;
const readingQuestionStems = new Map<string, string>();
const readingOptionSets = new Map<string, string>();

readingChapters.forEach((ch, chIdx) => {
  (ch.modules || []).forEach((mod: any, modIdx: number) => {
    const questions = mod.practiceQuestions || mod.questions || [];
    questions.forEach((q: any, qIdx: number) => {
      readingCount++;
      const qNum = q.id || q.questionNumber || qIdx + 1;
      const location = `Reading Chapter ${ch.chapterNumber || chIdx + 1}, Module ${mod.moduleNumber || modIdx + 1} (${mod.title || ''}), Question #${qNum}`;
      
      const optTexts = Array.isArray(q.options)
        ? q.options.map((o: any) => (typeof o === 'string' ? o : o.text || ''))
        : [];
      const explStr = extractTextFromAny(q.explanation || q.whyCorrect);
      const fullText = `${q.passage || q.prompt || ''} ${q.question || ''} ${explStr} ${optTexts.join(' ')}`;

      checkPlaceholders(fullText, location, 'Reading', q.question || q.prompt || q.passage || '');
      checkAIClichés(fullText, location, 'Reading', q.question || q.prompt || q.passage || '');

      if (optTexts.length < 4) {
        allIssues.push({
          section: 'Reading',
          location,
          category: 'Placeholder / Template / Hallucination',
          description: `Question has fewer than 4 options (found ${optTexts.length})`,
          questionSnippet: (q.question || q.prompt || '').substring(0, 100),
        });
      }

      const validLetters = ['A', 'B', 'C', 'D'];
      const ans = normalizeAnswerToLetter(q.correctAnswer, q.correctIndex);
      if (!validLetters.includes(ans)) {
        allIssues.push({
          section: 'Reading',
          location,
          category: 'Wrong Answer Explanation / Mismatch',
          description: `Invalid correctAnswer format "${q.correctAnswer}". Must be one of A, B, C, D`,
          questionSnippet: (q.question || q.prompt || '').substring(0, 100),
        });
      }

      const qStem = (q.question || q.prompt || '').trim().toLowerCase();
      if (qStem && qStem.length > 30 && !qStem.includes('which choice')) {
        if (readingQuestionStems.has(qStem)) {
          allIssues.push({
            section: 'Reading',
            location,
            category: 'Repetitive Pattern',
            description: `Duplicate question stem across reading modules. Matches: ${readingQuestionStems.get(qStem)}`,
            questionSnippet: qStem.substring(0, 100),
          });
        } else {
          readingQuestionStems.set(qStem, location);
        }
      }
    });
  });
});

// Reading Elite Passages
SAT_READING_ELITE_PASSAGES.forEach((ep: any, epIdx: number) => {
  (ep.questions || []).forEach((q: any, qIdx: number) => {
    readingCount++;
    const location = `Reading Elite Passage #${ep.passageNumber || epIdx + 1} (${ep.title}), Question #${q.questionNumber || qIdx + 1}`;
    const optTexts = Array.isArray(q.options)
      ? q.options.map((o: any) => (typeof o === 'string' ? o : o.text || ''))
      : [];
    const explStr = extractTextFromAny(q.whyCorrect || q.explanation);
    const fullText = `${ep.passageText || ''} ${q.prompt || ''} ${explStr} ${optTexts.join(' ')}`;

    checkPlaceholders(fullText, location, 'Reading', q.prompt || '');
    checkAIClichés(fullText, location, 'Reading', q.prompt || '');
  });
});

// 2. Writing Audit
let writingCount = 0;
const writingQuestionStems = new Map<string, string>();

writingChapters.forEach((ch, chIdx) => {
  (ch.exerciseBlocks || []).forEach((block: any, bIdx: number) => {
    const questions = block.questions || [];
    questions.forEach((q: any, qIdx: number) => {
      writingCount++;
      const qNum = q.id || q.questionNumber || qIdx + 1;
      const location = `Writing Chapter ${ch.chapterNumber || chIdx + 1}, Exercise Block ${block.blockNumber || bIdx + 1} (${block.title || ''}), Question #${qNum}`;
      
      const optTexts = Array.isArray(q.options)
        ? q.options.map((o: any) => (typeof o === 'string' ? o : o.text || ''))
        : [];
      const explStr = extractTextFromAny(q.explanation);
      const fullText = `${q.passage || ''} ${q.prompt || q.question || ''} ${explStr} ${optTexts.join(' ')}`;

      checkPlaceholders(fullText, location, 'Writing', q.prompt || q.question || q.passage || '');
      checkAIClichés(fullText, location, 'Writing', q.prompt || q.question || q.passage || '');

      const validLetters = ['A', 'B', 'C', 'D'];
      const ans = normalizeAnswerToLetter(q.correctAnswer, q.correctIndex);
      if (!validLetters.includes(ans)) {
        allIssues.push({
          section: 'Writing',
          location,
          category: 'Wrong Answer Explanation / Mismatch',
          description: `Invalid correctAnswer format "${q.correctAnswer}". Must be one of A, B, C, D`,
          questionSnippet: (q.prompt || q.question || q.passage || '').substring(0, 100),
        });
      }

      if (explStr && ans && validLetters.includes(ans)) {
        if (q.explanation && typeof q.explanation === 'object' && Array.isArray(q.explanation.distractorAnalysis)) {
          // Look for items explicitly stating "Correct answer" or starting with "Correct" (not "incorrectly")
          const correctInAnalysis = q.explanation.distractorAnalysis.find((d: any) => 
            /^\s*correct\b/i.test(d.whyWrong || '') || /\bcorrect answer\b/i.test(d.whyWrong || '')
          );
          if (correctInAnalysis && correctInAnalysis.optionLabel) {
            const analysisLabel = correctInAnalysis.optionLabel.trim().toUpperCase();
            if (analysisLabel !== ans && validLetters.includes(analysisLabel)) {
              allIssues.push({
                section: 'Writing',
                location,
                category: 'Wrong Answer Explanation / Mismatch',
                description: `Answer key is '${ans}', but distractor analysis marks Choice ${analysisLabel} as Correct Answer`,
                correctAnswer: ans,
                explanationSnippet: `Option ${analysisLabel}: ${correctInAnalysis.whyWrong}`,
              });
            }
          }
        }
      }
    });
  });
});

// 3. Math Audit
let mathCount = 0;
const mathQuestionStems = new Map<string, string>();

FULL_SAT_MATH_BOOK.forEach((ch, chIdx) => {
  const groups = (ch as any).exerciseGroups || (ch as any).exerciseBlocks || [];
  groups.forEach((group: any, gIdx: number) => {
    const questions = group.questions || [];
    questions.forEach((q: any, qIdx: number) => {
      mathCount++;
      const qNum = q.id || q.number || q.questionNumber || qIdx + 1;
      const location = `Math Chapter ${ch.chapterNumber || chIdx + 1} (${ch.chapterTitle || ''}), Exercise Set ${group.exerciseNumber || group.blockNumber || gIdx + 1} (${group.title || ''}), Question #${qNum}`;
      
      const optTexts = Array.isArray(q.options)
        ? q.options.map((o: any) => (typeof o === 'string' ? o : o.text || ''))
        : [];
      const explStr = extractTextFromAny(q.explanation || q.distractorExplanations);
      const fullText = `${q.question || q.prompt || ''} ${explStr} ${optTexts.join(' ')}`;

      checkPlaceholders(fullText, location, 'Math', q.question || q.prompt || '');
      checkAIClichés(fullText, location, 'Math', q.question || q.prompt || '');

      const qStem = (q.question || q.prompt || '').trim().toLowerCase();
      if (qStem && qStem.length > 25) {
        if (mathQuestionStems.has(qStem)) {
          allIssues.push({
            section: 'Math',
            location,
            category: 'Repetitive Pattern',
            description: `Duplicate math question stem across exercises. Matches: ${mathQuestionStems.get(qStem)}`,
            questionSnippet: qStem.substring(0, 100),
          });
        } else {
          mathQuestionStems.set(qStem, location);
        }
      }
    });
  });
});

// 4. SAT Drills Audit
let drillCount = 0;
const drillQuestionStems = new Map<string, string>();

ALL_DRILL_QUESTIONS.forEach((q: any, qIdx: number) => {
  drillCount++;
  const qNum = q.id || q.questionNumber || qIdx + 1;
  const location = `Practice Drill #${q.drillId}, ${q.section}, ${q.module} (${q.route || 'base'}), Question #${qNum}`;
  
  const choices = Array.isArray(q.choices) ? q.choices : (Array.isArray(q.options) ? q.options : []);
  const optTexts = choices.map((o: any) => (typeof o === 'string' ? o : o.text || ''));
  const explStr = extractTextFromAny(q.explanation);
  const fullText = `${q.passage || ''} ${q.questionText || q.prompt || q.question || ''} ${explStr} ${optTexts.join(' ')}`;

  checkPlaceholders(fullText, location, 'Drills', q.passage || q.questionText || q.prompt || '');
  checkAIClichés(fullText, location, 'Drills', q.passage || q.questionText || q.prompt || '');
});

const report = {
  summary: {
    totalReadingQuestionsAudited: readingCount,
    totalWritingQuestionsAudited: writingCount,
    totalMathQuestionsAudited: mathCount,
    totalExerciseQuestionsAudited: readingCount + writingCount + mathCount,
    totalPracticeDrillQuestionsAudited: drillCount,
    grandTotalQuestionsAudited: readingCount + writingCount + mathCount + drillCount,
    totalIssuesFlagged: allIssues.length,
  },
  issues: allIssues,
};

fs.writeFileSync('scripts/audit_results.json', JSON.stringify(report, null, 2));
console.log('Audit completed successfully. Issues flagged:', allIssues.length);
console.log(JSON.stringify(allIssues, null, 2));
