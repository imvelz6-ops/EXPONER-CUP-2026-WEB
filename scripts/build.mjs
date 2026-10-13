import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const outputDir = resolve(projectRoot, 'dist');
const publicEntries = ['index.html', 'css', 'js', 'pages', 'assets'];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const entry of publicEntries) {
  cpSync(resolve(projectRoot, entry), resolve(outputDir, entry), { recursive: true });
}

console.log(`Static site built in ${outputDir}`);
