const path = require('path');
const fs = require('fs');

const inputPath = '../../src/icons';
const outputFile = `${inputPath}/index.js`;
const inputFileExt = '.svg';
const resolve = (...args) => path.resolve(__dirname, ...args);
let result = '';

const generateIcons = (icon) => {
  const iconName = icon.replace(inputFileExt, '');
  const content = fs.readFileSync(resolve(`${inputPath}/${icon}`))
    .toString()
    .split(/[\r\n]/)
    .map((row) => row.trim())
    .join('')
    .replace(/\s{2,}/g, '');

  result += `  '${iconName}': '${content}',\n`;
};

fs.readdirSync(resolve(inputPath))
  .filter((file) => file.endsWith(inputFileExt))
  .forEach(generateIcons);

result = `/* eslint-disable */\n\nexport default {\n${result}};\n`;

fs.writeFileSync(resolve(outputFile), result);
