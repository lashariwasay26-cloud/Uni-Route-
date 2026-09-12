import * as fs from 'fs';

const dupes = JSON.parse(fs.readFileSync('scripts/cross_question_dupes.json', 'utf-8'));

console.log(`Total: ${dupes.length}`);
const bySection: Record<string, any[]> = {};
for (const d of dupes) {
  const sec = d.location.split(' ')[0];
  if (!bySection[sec]) bySection[sec] = [];
  bySection[sec].push(d);
}

for (const [sec, list] of Object.entries(bySection)) {
  console.log(`\n=== ${sec} (${list.length}) ===`);
  list.slice(0, 15).forEach((d, i) => {
    console.log(`${i+1}. Location: ${d.location} | First: ${d.firstSeen}`);
    console.log(`   Options: ${JSON.stringify(d.opts)}`);
  });
}
