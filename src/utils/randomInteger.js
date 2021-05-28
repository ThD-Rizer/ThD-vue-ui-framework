import { InvalidTypeError } from './errors';
import { isNumber } from './inspect';

/**
 * Генератор случайных чисел
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export default function randomInteger(min = 0, max = 1) {
  if (!isNumber(min)) {
    throw new InvalidTypeError(min, 'min', 'number');
  }
  if (!isNumber(max)) {
    throw new InvalidTypeError(max, 'max', 'number');
  }

  let result = (max - min) + 1;
  result *= Math.random();
  result += min - 0.5;

  return parseInt(Math.round(result), 10);
}
