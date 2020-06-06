import { InvalidTypeError } from '../errors';
import { isString } from '../inspect';

/**
 * Вырезание пробелов с правой стороны строки
 *
 * @param {String} str
 * @returns {String}
 */
export default function trimLeft(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'String');
  }

  return str.replace(/\s+$/, '');
}
