import { InvalidTypeError } from './errors';
import { isNumber } from './inspect';

/**
 * @param {Number} num
 * @returns {Boolean}
 */
export default function isOdd(num) {
  if (!isNumber(num)) {
    throw new InvalidTypeError(num, 'num', 'Number');
  }

  return !!(num % 2);
}
