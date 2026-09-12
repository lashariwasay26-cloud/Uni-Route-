import * as fs from 'fs';
import * as path from 'path';

// Let's load all files in src/data/writing, src/data/satDrills, and src/data/ (all math)
function getAllTsFiles(dir: string): string[] {
  const list: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'node_modules' && e.name !== 'dist' && e.name !== '.git') {
      list.push(...getAllTsFiles(full));
    } else if (e.isFile() && e.name.endsWith('.ts') && !e.name.endsWith('.d.ts')) {
      list.push(full);
    }
  }
  return list;
}

const dataFiles = getAllTsFiles('src/data');
console.log(`Found ${dataFiles.length} data files.`);

const dupesMap = new Map<string, any[]>();

for (const file of dataFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  // Match question objects with regex or AST
  // Let's find choices/options arrays
  // We can also extract question structures
}
