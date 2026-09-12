import * as fs from 'fs';
import * as path from 'path';

// Let's load the repeated groups
const groups: any[] = JSON.parse(fs.readFileSync('scripts/repeated_groups_with_files.json', 'utf-8'));

console.log(`Processing ${groups.length} repeated groups...`);

// Helper to update a question in a file
function updateQuestionInFile(filePath: string, qId: string, newOpts: string[], newAns?: any, newAnsText?: string, promptPrefix?: string) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File does not exist: ${filePath}`);
    return false;
  }
  let content = fs.readFileSync(fullPath, 'utf-8');

  // Search for the question object
  const idStr = `'${qId}'`;
  const idStr2 = `"${qId}"`;
  let idx = content.indexOf(idStr);
  if (idx === -1) idx = content.indexOf(idStr2);
  if (idx === -1) {
    console.warn(`Could not find id ${qId} in ${filePath}`);
    return false;
  }

  // Find the end of the question object
  // Find options or choices inside this question block
  const searchSub = content.substring(idx, idx + 3000);
  
  // Replace options or choices
  const optMatch = searchSub.match(/(options|choices):\s*\[[\s\S]*?\]/);
  if (!optMatch) {
    console.warn(`Could not find options/choices for ${qId} in ${filePath}`);
    return false;
  }

  const oldOptStr = optMatch[0];
  const fieldName = optMatch[1];
  const newOptStr = `${fieldName}: ${JSON.stringify(newOpts)}`;

  // Find exact position in content
  const fullMatchIdx = content.indexOf(oldOptStr, idx);
  if (fullMatchIdx === -1) {
    console.warn(`Could not find exact options string match for ${qId}`);
    return false;
  }

  content = content.substring(0, fullMatchIdx) + newOptStr + content.substring(fullMatchIdx + oldOptStr.length);

  // If newAns is provided, update correctAnswer / correctIndex if needed
  if (newAns !== undefined) {
    const ansMatch = content.substring(idx, idx + 3000).match(/(correctAnswer|correctIndex):\s*([^,\n}]+)/);
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

  // If newAnsText is provided, update correctAnswerText if it exists
  if (newAnsText !== undefined) {
    const ansTextMatch = content.substring(idx, idx + 3000).match(/correctAnswerText:\s*('[^']*'|"[^"]*")/);
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
  return true;
}

console.log("Helper loaded.");
