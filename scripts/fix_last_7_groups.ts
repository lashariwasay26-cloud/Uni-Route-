import * as fs from 'fs';
import * as path from 'path';

function findAndReplaceInFile(filePath: string, qId: string, newOpts: string[], newAns?: any, newAnsText?: string) {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');

  const idRegex = new RegExp(`(id|number):\\s*['"]?${qId}['"]?`);
  const match = content.match(idRegex);
  if (!match || match.index === undefined) {
    console.warn(`Could not find ${qId} in ${filePath}`);
    return false;
  }

  const idx = match.index;
  const searchSub = content.substring(idx, idx + 2500);

  const optMatch = searchSub.match(/(options|choices):\s*\[[\s\S]*?\]/);
  if (!optMatch) {
    console.warn(`Could not match options for ${qId} in ${filePath}`);
    return false;
  }

  const oldOptStr = optMatch[0];
  const fieldName = optMatch[1];
  const newOptStr = `${fieldName}: ${JSON.stringify(newOpts)}`;

  const fullOptIdx = content.indexOf(oldOptStr, idx);
  content = content.substring(0, fullOptIdx) + newOptStr + content.substring(fullOptIdx + oldOptStr.length);

  if (newAns !== undefined) {
    const ansSub = content.substring(idx, idx + 2500);
    const ansMatch = ansSub.match(/(correctAnswer|correctIndex):\s*([^,\n}]+)/);
    if (ansMatch) {
      const oldAnsStr = ansMatch[0];
      const ansField = ansMatch[1];
      const newAnsVal = typeof newAns === 'string' ? `'${newAns}'` : String(newAns);
      const newAnsStr = `${ansField}: ${newAnsVal}`;
      const ansIdx = content.indexOf(oldAnsStr, idx);
      if (ansIdx !== -1) {
        content = content.substring(0, ansIdx) + newAnsStr + content.substring(ansIdx + oldAnsStr.length);
      }
    }
  }

  if (newAnsText !== undefined) {
    const ansTextSub = content.substring(idx, idx + 2500);
    const ansTextMatch = ansTextSub.match(/correctAnswerText:\s*('[^']*'|"[^"]*")/);
    if (ansTextMatch) {
      const oldAnsTextStr = ansTextMatch[0];
      const newAnsTextStr = `correctAnswerText: ${JSON.stringify(newAnsText)}`;
      const ansTextIdx = content.indexOf(oldAnsTextStr, idx);
      if (ansTextIdx !== -1) {
        content = content.substring(0, ansTextIdx) + newAnsTextStr + content.substring(ansTextIdx + oldAnsTextStr.length);
      }
    }
  }

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Updated ${qId} in ${filePath}`);
  return true;
}

// 1. Group 1: ch4-q4 & ch5-q55
findAndReplaceInFile('src/data/writing/satWritingChapter4QuestionsPart1.ts', 'ch4-q4', ['who', 'which', 'whom', 'whose'], 2);
findAndReplaceInFile('src/data/writing/satWritingChapter5QuestionsPart2.ts', 'ch5-q55', ['whose findings', 'who findings', 'whom findings', 'which findings'], 0);

// 2. Group 2: ch4-q37
findAndReplaceInFile('src/data/writing/satWritingChapter4QuestionsPart2.ts', 'ch4-q37', ['that of the museum', 'their museums', 'those of the museum', 'them museums'], 1);

// 3. Group 3: ch6-q91
findAndReplaceInFile('src/data/writing/satWritingChapter6QuestionsPart2.ts', 'ch6-q91', ['Accordingly,', 'For example,', 'Moreover,', 'Conversely,'], 0);

// 4. Group 4: ch6-q93
findAndReplaceInFile('src/data/writing/satWritingChapter6QuestionsPart2.ts', 'ch6-q93', ['at the beginning of sentence 1.', 'immediately before sentence 2.', 'after sentence 4.', 'leave in current position.'], 0);

// 5. Group 5: ch6-q99
findAndReplaceInFile('src/data/writing/satWritingChapter6QuestionsPart2.ts', 'ch6-q99', ['prior to sentence 1.', 'prior to sentence 2.', 'prior to sentence 3.', 'leave in original place.'], 0);

// 6. Group 6: ch1-q46 & ch7-ex-q38
findAndReplaceInFile('src/data/satMathChapter1QuestionsPart2.ts', 'ch1-q46', ['6', '7', '8', '11'], 2, '8');
findAndReplaceInFile('src/data/satMathChapter7QuestionsPart2.ts', 'ch7-ex-q38', ['6 cm', '7 cm', '8 cm', '9 cm'], 1, '7 cm');

// 7. Group 7: ch2-q39
findAndReplaceInFile('src/data/satMathChapter2QuestionsPart2.ts', 'ch2-q39', ['10', '12', '14', '16'], 0, '10');
