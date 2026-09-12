import * as fs from 'fs';

const groups = JSON.parse(fs.readFileSync('scripts/repeated_groups_with_files.json', 'utf-8'));
let unmapped = 0;
for (const g of groups) {
  for (const it of g.items) {
    if (!it.filePath) {
      unmapped++;
      console.log(`Unmapped: [${it.section}] ID: ${it.id} | Prompt: ${it.prompt.substring(0, 40)}`);
    }
  }
}
console.log(`Total unmapped: ${unmapped}`);
