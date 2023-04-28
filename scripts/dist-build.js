const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const dist = path.resolve(__dirname, '..', 'dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true });
}

const tailwind = spawnSync('tailwindcss', ['-o dist/style.css --minify'], {
  shell: true
});
if (tailwind.status) {
  console.error('build:tailwind failed', tailwind.error);
  // process.exit(1);
}
//
const types = spawnSync(
  'vue-tsc',
  [
    '-p tsconfig.build.json --declaration --emitDeclarationOnly --outDir dist/types'
  ],
  {
    shell: true
  }
);
if (types.status) {
  console.error('build:types failed', types.error);
  // process.exit(1);
}
//
spawnSync('pnpm', ['switch:v3']);
const v3 = spawnSync('vite', ['build']);
if (v3.status) {
  console.error('build:v3 failed', v3.error);
  process.exit(1);
}
//
spawnSync('pnpm', ['switch:v2']);
const v2 = spawnSync('vite', ['build']);
if (v2.status) {
  console.error('build:v2 failed', v2.error);
  process.exit(1);
}
