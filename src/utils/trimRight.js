import { InvalidTypeError } from './errors';
import { isString } from './inspect';

/**
 * Вырезание пробелов с правой стороны строки
 *
 * @param {string} str
 * @returns {string}
 */
export default function trimRight(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'string');
  }

  return str.replace(/\s+$/, '');
}
