const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const { isVue3, isVue2 } = require('vue-demi');

const dist = path.resolve(__dirname, '..', 'dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true });
}

const tailwind = spawn('pnpm', ['build:tailwind'], {
  stdio: [process.stdout, process.stderr]
});

tailwind.on('close', code => {
  if (code !== 0) {
    console.error('build:tailwind failed', tailwind.error);
    process.exit(code);
  }
});

const types = spawn('pnpm', ['build:types'], {
  stdio: [process.stdout, process.stderr]
});

types.on('close', code => {
  if (code !== 0) {
    console.error('build:types failed', types.error);
    process.exit(code);
  }

  const resolveAlias = spawn('pnpm', ['resolve:alias'], {
    stdio: [process.stdout, process.stderr]
  });

  resolveAlias.on('close', code => {
    if (code !== 0) {
      console.error('resolve:alias failed', types.error);
      process.exit(code);
    }
  });
});

if (isVue3) {
  const v3 = spawn('pnpm', ['build:prod:v3'], {
    stdio: [process.stdout, process.stderr]
  });

  v3.on('close', code => {
    if (code !== 0) {
      console.error('build:v3 failed', v3.error);
      process.exit(code);
    }
  });
} else if (isVue2) {
  const v2 = spawn('pnpm', ['build:prod:v2'], {
    stdio: [process.stdout, process.stderr]
  });

  v2.on('close', code => {
    if (code !== 0) {
      console.error('build:v2 failed', v2.error);
      process.exit(code);
    }
  });
}
