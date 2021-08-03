import { InvalidTypeError } from './errors';
import { isNumber } from './inspect';

/**
 * @param {number} num
 * @returns {boolean}
 */
export default function isEven(num) {
  if (!isNumber(num)) {
    throw new InvalidTypeError(num, 'num', 'number');
  }

  return !(num % 2);
}
