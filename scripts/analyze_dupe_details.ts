import * as fs from 'fs';
import * as path from 'path';

// Let's locate each dupe in source files
const dupes = JSON.parse(fs.readFileSync('scripts/cross_question_dupes.json', 'utf-8'));

console.log(`Analyzing all ${dupes.length} dupes...`);

// Let's print out the list of items grouped by their ID prefix
const idGroups: Record<string, any[]> = {};
for (const d of dupes) {
  const id = d.item.id || d.item.number || d.item.questionNumber;
  const prefix = String(id).split('-')[0].split('_')[0];
  if (!idGroups[prefix]) idGroups[prefix] = [];
  idGroups[prefix].push(d);
}

for (const [prefix, list] of Object.entries(idGroups)) {
  console.log(`Group ${prefix}: ${list.length} items`);
}
