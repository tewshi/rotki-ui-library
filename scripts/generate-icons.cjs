const path = require('node:path');
const { pascalCase } = require('scule');
const { XMLParser } = require('fast-xml-parser');
const { readdirSync, readFileSync, writeFileSync } = require('node:fs');

const PREFIX = 'ri-';
const TARGET = 'all-icons.ts';

function resolveRoot(...dir) {
  return path.resolve(__dirname, '..', ...dir);
}

function resolveRemixIconDir(...dir) {
  return path.resolve(
    __dirname,
    '..',
    'node_modules',
    'remixicon',
    'icons',
    ...dir
  );
}

function loop(data, cb) {
  for (const el of data) {
    cb(el);
  }
}

function getPathFromSvgString(svg) {
  const parser = new XMLParser({
    ignoreAttributes: false
  });
  const obj = parser.parse(svg);
  return obj.svg.path['@_d'];
}

function collectAllIconMetas() {
  const res = [];
  const categoryDirs = readdirSync(resolveRemixIconDir());

  loop(categoryDirs, async (categoryDir) => {
    const iconsDirs = readdirSync(resolveRemixIconDir(categoryDir));

    loop(iconsDirs, async (iconName) => {
      const name = PREFIX + path.basename(iconName).replace('.svg', '');
      const generatedName = pascalCase(name);
      const svg = readFileSync(
        resolveRemixIconDir(categoryDir, iconName),
        'utf8'
      );
      const svgPath = getPathFromSvgString(svg);

      res.push({
        name,
        generatedName,
        svgPath
      });
    });
  });

  return res;
}

function generate() {
  const metadata = collectAllIconMetas();
  const fileContent = collectIconConstantString(metadata);
  writeFileSync(resolveRoot(TARGET), fileContent, 'utf8');
}

function collectIconConstantString(icons) {
  let iconsFile = `// Generated by scripts/generate-icons.js
/* eslint-disable */
/* prettier-ignore */
import { type GeneratedIcon } from '@/types/icons';\n
`;

  loop(icons, (icon) => {
    iconsFile += `export const ${icon.generatedName}: GeneratedIcon = {
  name: '${icon.name}',
  path: '${icon.svgPath}',
};\n`;
  });

  return iconsFile;
}

generate();
