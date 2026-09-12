import * as fs from 'fs';
import * as path from 'path';

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
const fileContents = dataFiles.map(f => ({ file: f, content: fs.readFileSync(f, 'utf-8') }));

const groups = JSON.parse(fs.readFileSync('scripts/repeated_groups_full.json', 'utf-8'));

for (const g of groups) {
  for (const it of g.items) {
    let found = false;
    for (const fc of fileContents) {
      if (it.id && (fc.content.includes(`'${it.id}'`) || fc.content.includes(`"${it.id}"`))) {
        it.filePath = fc.file;
        found = true;
        break;
      }
    }
    if (!found) {
      // Try finding by prompt snippet
      const snippet = (it.prompt || '').substring(0, 30).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      for (const fc of fileContents) {
        if (snippet.length > 10 && fc.content.includes(snippet)) {
          it.filePath = fc.file;
          found = true;
          break;
        }
      }
    }
  }
}

fs.writeFileSync('scripts/repeated_groups_with_files.json', JSON.stringify(groups, null, 2));
console.log('Saved repeated groups with file paths.');
