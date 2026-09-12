import * as fs from 'fs';
import * as path from 'path';

function searchDirectory(dir: string, pattern: string) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') {
        searchDirectory(full, pattern);
      }
    } else if (f.endsWith('.ts') || f.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf-8');
      if (content.includes(pattern)) {
        console.log(`Found "${pattern}" in ${full}`);
      }
    }
  }
}

searchDirectory('src/data', 'ex3-q35');
searchDirectory('src/data', 'ch2-ex19-q18');
searchDirectory('src/data', 'q68');
searchDirectory('src/data', 'q101');
