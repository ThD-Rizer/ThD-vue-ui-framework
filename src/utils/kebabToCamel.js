import { InvalidTypeError } from './errors';
import { isString } from './inspect';

/**
 * Format string from `kebab-case` to `camelCase`
 *
 * @param {string} str
 * @returns {string}
 */
export default function kebabToCamel(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'string');
  }

  const chars = str.split('-');

  return chars.reduce((acc, part, index) => {
    const firstLetter = part.charAt(0).toLocaleUpperCase();
    const char = (index > 0)
      ? firstLetter + part.substr(1)
      : part;

    return acc + char;
  }, '');
}
