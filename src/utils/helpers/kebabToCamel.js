import { InvalidTypeError } from '@/utils/errors';
import { isString } from '@/utils/inspect';

/**
 * Format string from `kebab-case` to `camelCase`
 *
 * @param {String} str
 * @returns {String}
 */
export default function kebabToCamel(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'String');
  }

  const chars = str.split('-');

  return chars.reduce((acc, part, index) => {
    const lower = part.toLocaleLowerCase();
    const firstLetter = lower.charAt(0).toLocaleUpperCase();
    const char = (index > 0)
      ? firstLetter + lower.substr(1)
      : lower;

    return acc + char;
  }, '');
}
