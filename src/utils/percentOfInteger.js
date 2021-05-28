import { InvalidTypeError } from './errors';
import { isNumber } from './inspect';

/**
 * Вычисление процента от числа
 *
 * @param {number} percent
 * @param {number} value
 * @returns {number}
 */
export default function percentOfInteger(percent, value) {
  if (!isNumber(percent)) {
    throw new InvalidTypeError(percent, 'percent', 'number');
  }
  if (!isNumber(value)) {
    throw new InvalidTypeError(value, 'value', 'number');
  }

  return (value * percent) / 100;
}
