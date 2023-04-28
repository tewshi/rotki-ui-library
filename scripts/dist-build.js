const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

try {
  const dist = path.resolve(__dirname, '..', 'dist');
  if (fs.existsSync(dist)) {
    fs.rmSync(dist, { recursive: true });
  }

  execSync('pnpm run build:tailwind');

  execSync('pnpm run build:types');

  execSync('pnpm run build:prod:v3');

  execSync('pnpm run build:prod:v2');
} catch (e) {
  console.log(e);
  process.exit(e.status);
}
