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
      const newAnsVal = typeof ruleNewAns(newAns) === 'string' ? `'${newAns}'` : String(newAns);
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

function ruleNewAns(a: any) {
  return a;
}

findAndReplaceInFile('src/data/writing/satWritingChapter4QuestionsPart1.ts', 'ch4-q4', ['whoever', 'whomever', 'whom', 'which'], 2);
findAndReplaceInFile('src/data/satMathChapter2QuestionsPart2.ts', 'ch2-q39', ['10', '13', '15', '18'], 0, '10');
