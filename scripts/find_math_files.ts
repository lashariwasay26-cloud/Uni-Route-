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
    } else if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf-8');
      if (content.includes(pattern)) {
        console.log(`Found "${pattern}" in ${full}`);
      }
    }
  }
}

searchDirectory('src', 'ch3-sq7');
searchDirectory('src', 'ch4-q39');
searchDirectory('src', 'ch5-q38');
searchDirectory('src', 'ch6-q1');
searchDirectory('src', 'ch7-q68');
