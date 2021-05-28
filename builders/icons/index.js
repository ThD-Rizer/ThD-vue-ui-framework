const fs = require('fs');

const ICONS_APP_PATH = 'src/icons/';

const INPUT_FILE_EXT = '.svg';
const OUTPUT_FILENAME = 'index.js';

/**
 * @param {string} inputPath
 * @param {string} fileName
 * @returns {string}
 */
function convertFileToString(inputPath, fileName) {
  const content = fs.readFileSync(`${inputPath}/${fileName}`);

  return content.toString();
}

/**
 * @param {string} content
 * @returns {string}
 */
function prepareIcon(content) {
  return content
    .split(/[\r\n]/)
    .map((row) => row.trim())
    .join('')
    .replace(/\s{2,}/g, '');
}

/**
 * @param {string} inputPath
 * @param {string} outputPath
 * @returns {void}
 */
function build(inputPath, outputPath) {
  const outputFile = outputPath + OUTPUT_FILENAME;
  let result = '';

  fs.readdirSync(inputPath)
    .filter((fileName) => fileName.endsWith(INPUT_FILE_EXT))
    .forEach((fileName) => {
      const iconName = fileName.replace(INPUT_FILE_EXT, '');
      let content = convertFileToString(inputPath, fileName);

      content = prepareIcon(content);
      result += `  '${iconName}': '${content}',\n`;
    });

  result = `/* eslint-disable */\n\nexport default {\n${result}};\n`;

  fs.writeFileSync(outputFile, result);
}

build(ICONS_APP_PATH, ICONS_APP_PATH);
