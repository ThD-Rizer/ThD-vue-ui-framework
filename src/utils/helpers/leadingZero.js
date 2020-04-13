import { InvalidTypeError } from '@/utils/errors';
import { isString, isNumber } from '@/utils/inspect';
import padStart from './padStart';

/**
 * @param {Number | String} number
 * @param {Number} [length = 2]
 * @returns {String}
 */
export default function leadingZero(number, length = 2) {
  if (!isString(number) || !isNumber(number)) {
    throw new InvalidTypeError(number, 'number', 'Number | String');
  }
  if (!isNumber(length)) {
    throw new InvalidTypeError(length, 'length', 'Number');
  }

  return padStart(number, length, '0');
}
