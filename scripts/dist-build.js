const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const { isVue3, isVue2 } = require('vue-demi');

const dist = path.resolve(__dirname, '..', 'dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true });
}

const tailwind = spawnSync('pnpm', ['build:tailwind'], { shell: true });
if (tailwind.status !== 0) {
  console.error('build:tailwind failed', tailwind.error);
  process.exit(1);
}

const types = spawnSync('pnpm', ['build:types'], { shell: true });
if (types.status !== 0) {
  console.error('build:types failed', types.error);
  process.exit(1);
}

if (isVue3) {
  const v3 = spawnSync('pnpm', ['build:prod:v3'], { shell: true });
  if (v3.status !== 0) {
    console.error('build:v3 failed', v3.error);
    process.exit(1);
  }
} else if (isVue2) {
  const v2 = spawnSync('pnpm', ['build:prod:v2'], { shell: true });
  if (v2.status !== 0) {
    console.error('build:v2 failed', v2.error);
    process.exit(1);
  }
}
