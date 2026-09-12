import * as fs from 'fs';

const groups = JSON.parse(fs.readFileSync('scripts/repeated_groups_with_files.json', 'utf-8'));

for (let i = 0; i < groups.length; i++) {
  const g = groups[i];
  console.log(`\n================ Group ${i + 1} (${g.count} items) ================`);
  console.log(`Key: ${g.key}`);
  for (const it of g.items) {
    console.log(`- [${it.section}] ID: ${it.id} (File: ${it.filePath})`);
    console.log(`  Ans: ${it.correctAnswer ?? it.correctIndex}`);
    console.log(`  Prompt: ${it.prompt.substring(0, 80)}`);
  }
}
