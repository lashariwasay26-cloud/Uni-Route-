import * as fs from 'fs';
import * as path from 'path';

const dupes = JSON.parse(fs.readFileSync('scripts/cross_question_dupes.json', 'utf-8'));

// All potential files
const allFiles = [
  'src/data/writing/satWritingChapter1QuestionsPart1.ts',
  'src/data/writing/satWritingChapter1QuestionsPart2.ts',
  'src/data/writing/satWritingChapter2QuestionsPart1.ts',
  'src/data/writing/satWritingChapter2QuestionsPart2.ts',
  'src/data/writing/satWritingChapter3QuestionsPart1.ts',
  'src/data/writing/satWritingChapter3QuestionsPart2.ts',
  'src/data/writing/satWritingChapter4QuestionsPart1.ts',
  'src/data/writing/satWritingChapter4QuestionsPart2.ts',
  'src/data/writing/satWritingChapter5QuestionsPart1.ts',
  'src/data/writing/satWritingChapter5QuestionsPart2.ts',
  'src/data/writing/satWritingChapter6QuestionsPart1.ts',
  'src/data/writing/satWritingChapter6QuestionsPart2.ts',
  'src/data/writing/satWritingChapter6QuestionsPart3.ts',
  'src/data/writing/satWritingChapter7Questions.ts',
  'src/data/satMathChapter1Questions.ts',
  'src/data/satMathChapter2Questions.ts',
  'src/data/satMathChapter3Questions.ts',
  'src/data/satMathChapter4Questions.ts',
  'src/data/satMathChapter5Questions.ts',
  'src/data/satMathChapter6Questions.ts',
  'src/data/satMathChapter7Questions.ts',
  'src/data/satMathChapter8Questions.ts',
  'src/data/satMathChapter9Questions.ts',
  'src/data/satMathChapter10Questions.ts',
  'src/data/satMathChapter11Questions.ts',
  'src/data/satDrills/drill1Data.ts',
  'src/data/satDrills/drill1Module2.ts',
  'src/data/satDrills/drill2Data.ts',
  'src/data/satDrills/drill2Module2.ts',
  'src/data/satDrills/drill3Data.ts',
  'src/data/satDrills/drill3Module2.ts',
  'src/data/satDrills/drill4Data.ts',
  'src/data/satDrills/drill4Module2.ts',
  'src/data/satDrills/drill5Data.ts',
  'src/data/satDrills/drill5Module2.ts',
];

const fileContents: Record<string, string> = {};
for (const f of allFiles) {
  const p = path.join(process.cwd(), f);
  if (fs.existsSync(p)) {
    fileContents[f] = fs.readFileSync(p, 'utf-8');
  }
}

console.log(`Loaded ${Object.keys(fileContents).length} files.`);

// Map each dupe to a file
const matched: any[] = [];
const unmatched: any[] = [];

for (const d of dupes) {
  const id = d.item.id || d.item.number || d.item.questionNumber;
  let foundFile = '';
  for (const [f, c] of Object.entries(fileContents)) {
    if (c.includes(`'${id}'`) || c.includes(`"${id}"`) || c.includes(`id: ${id}`) || c.includes(`number: ${id}`) || c.includes(`id: '${id}'`)) {
      foundFile = f;
      break;
    }
  }
  if (foundFile) {
    matched.push({ ...d, file: foundFile, id });
  } else {
    unmatched.push(d);
  }
}

console.log(`Matched: ${matched.length}, Unmatched: ${unmatched.length}`);
if (unmatched.length > 0) {
  console.log('Unmatched samples:', unmatched.slice(0, 5));
}

// Group matched by file
const byFile: Record<string, any[]> = {};
for (const m of matched) {
  if (!byFile[m.file]) byFile[m.file] = [];
  byFile[m.file].push(m);
}

for (const [f, list] of Object.entries(byFile)) {
  console.log(`${f}: ${list.length} questions`);
}
