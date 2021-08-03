import { InvalidTypeError } from './errors';
import { isString } from './inspect';

/**
 * Вырезание пробелов с левой стороны строки
 *
 * @param {string} str
 * @returns {string}
 */
export default function trimLeft(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'string');
  }

  return str.replace(/^\s+/, '');
}
