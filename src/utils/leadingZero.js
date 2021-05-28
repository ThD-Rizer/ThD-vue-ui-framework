import { InvalidTypeError } from './errors';
import { isString, isNumber } from './inspect';
import padStart from './padStart';

/**
 * @param {number | string} number
 * @param {number} [length = 0]
 * @returns {string}
 */
export default function leadingZero(number, length = 0) {
  if (!isString(number) || !isNumber(number)) {
    throw new InvalidTypeError(number, 'number', 'number | string');
  }
  if (!isNumber(length)) {
    throw new InvalidTypeError(length, 'length', 'number');
  }

  return padStart(number, length, '0');
}
