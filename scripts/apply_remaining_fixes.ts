import * as fs from 'fs';
import * as path from 'path';

interface UpdateRule {
  filePath: string;
  id: string;
  newOptions: string[];
  newAnswer?: any;
  newAnswerText?: string;
}

const remainingUpdates: UpdateRule[] = [
  // 1. Writing Chapter 1 Part 2
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex3-q35',
    newOptions: ['orchestra,', 'orchestra;', 'orchestra:', 'orchestra and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex3-q36',
    newOptions: ['festival,', 'festival;', 'festival:', 'festival'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex3-q39',
    newOptions: ['tapestries—', 'tapestries,', 'tapestries;', 'tapestries'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex3-q41',
    newOptions: ['manuscripts,', 'manuscripts;', 'manuscripts:', 'manuscripts and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex3-q42',
    newOptions: ['instruments,', 'instruments;', 'instruments:', 'instruments and'],
    newAnswer: 0,
  },

  // 2. Writing Chapter 2 Part 1
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart1.ts',
    id: 'ch2-ex19-q18',
    newOptions: ['techniques:', 'techniques', 'techniques,', 'techniques;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart1.ts',
    id: 'ch2-ex19-q20',
    newOptions: ['materials:', 'materials', 'materials,', 'materials;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart1.ts',
    id: 'ch2-ex19-q22',
    newOptions: ['observations:', 'observations', 'observations,', 'observations;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart1.ts',
    id: 'ch2-ex19-q24',
    newOptions: ['conclusions:', 'conclusions', 'conclusions,', 'conclusions;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart1.ts',
    id: 'ch2-ex19-q26',
    newOptions: ['variables:', 'variables', 'variables,', 'variables;'],
    newAnswer: 0,
  },

  // 3. Math Chapter 7 Part 3 & 4
  {
    filePath: 'src/data/satMathChapter7QuestionsPart3.ts',
    id: 'ch7-ex-q68',
    newOptions: ['1/4', '1/2', '√3/2', '1'],
    newAnswer: 1,
    newAnswerText: '1/2',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart4.ts',
    id: 'ch7-ex-q101',
    newOptions: ['6', '10', '12', '16'],
    newAnswer: 1,
    newAnswerText: '10',
  },
];

for (const rule of remainingUpdates) {
  const fullPath = path.join(process.cwd(), rule.filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');

  const idRegex = new RegExp(`(id|number):\\s*['"]?${rule.id}['"]?`);
  const match = content.match(idRegex);
  if (!match || match.index === undefined) {
    console.warn(`Could not locate ${rule.id} in ${rule.filePath}`);
    continue;
  }

  const idx = match.index;
  const searchSub = content.substring(idx, idx + 2500);

  const optMatch = searchSub.match(/(options|choices):\s*\[[\s\S]*?\]/);
  if (!optMatch) {
    console.warn(`Could not match options for ${rule.id} in ${rule.filePath}`);
    continue;
  }

  const oldOptStr = optMatch[0];
  const fieldName = optMatch[1];
  const newOptStr = `${fieldName}: ${JSON.stringify(rule.newOptions)}`;

  const fullOptIdx = content.indexOf(oldOptStr, idx);
  content = content.substring(0, fullOptIdx) + newOptStr + content.substring(fullOptIdx + oldOptStr.length);

  if (rule.newAnswer !== undefined) {
    const ansSub = content.substring(idx, idx + 2500);
    const ansMatch = ansSub.match(/(correctAnswer|correctIndex):\s*([^,\n}]+)/);
    if (ansMatch) {
      const oldAnsStr = ansMatch[0];
      const ansField = ansMatch[1];
      const newAnsVal = typeof rule.newAnswer === 'string' ? `'${rule.newAnswer}'` : String(rule.newAnswer);
      const newAnsStr = `${ansField}: ${newAnsVal}`;
      const ansIdx = content.indexOf(oldAnsStr, idx);
      if (ansIdx !== -1) {
        content = content.substring(0, ansIdx) + newAnsStr + content.substring(ansIdx + oldAnsStr.length);
      }
    }
  }

  if (rule.newAnswerText !== undefined) {
    const ansTextSub = content.substring(idx, idx + 2500);
    const ansTextMatch = ansTextSub.match(/correctAnswerText:\s*('[^']*'|"[^"]*")/);
    if (ansTextMatch) {
      const oldAnsTextStr = ansTextMatch[0];
      const newAnsTextStr = `correctAnswerText: ${JSON.stringify(rule.newAnswerText)}`;
      const ansTextIdx = content.indexOf(oldAnsTextStr, idx);
      if (ansTextIdx !== -1) {
        content = content.substring(0, ansTextIdx) + newAnsTextStr + content.substring(ansTextIdx + oldAnsTextStr.length);
      }
    }
  }

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Applied remaining update for ${rule.id} in ${rule.filePath}`);
}
