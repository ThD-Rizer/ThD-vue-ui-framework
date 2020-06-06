import { InvalidTypeError } from '../errors';
import { isNumber } from '../inspect';

/**
 * Вычисление процента от числа
 *
 * @param {Number} percent
 * @param {Number} value
 * @returns {Number}
 */
export default function percentOfInteger(percent, value) {
  if (!isNumber(percent)) {
    throw new InvalidTypeError(percent, 'percent', 'Number');
  }
  if (!isNumber(value)) {
    throw new InvalidTypeError(value, 'value', 'Number');
  }

  return (value * percent) / 100;
}
