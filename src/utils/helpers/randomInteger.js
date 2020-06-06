import { InvalidTypeError } from '../errors';
import { isNumber } from '../inspect';

/**
 * Генератор случайных чисел
 *
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export default function randomInteger(min = 0, max = 1) {
  if (!isNumber(min)) {
    throw new InvalidTypeError(min, 'min', 'Number');
  }
  if (!isNumber(max)) {
    throw new InvalidTypeError(max, 'max', 'Number');
  }

  let result = (max - min) + 1;
  result *= Math.random();
  result += min - 0.5;

  return parseInt(Math.round(result), 10);
}
