import { InvalidTypeError } from './errors';
import { isString } from './inspect';

/**
 * Format string from `kebab-case` to `PascalCase`
 *
 * @param {string} str
 * @returns {string}
 */
export default function kebabToPascal(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'string');
  }

  const chars = str.split('-');

  return chars.reduce((acc, part) => {
    const lower = part.toLocaleLowerCase();
    const firstLetter = lower.charAt(0).toLocaleUpperCase();

    return acc + firstLetter + lower.substr(1);
  }, '');
}
