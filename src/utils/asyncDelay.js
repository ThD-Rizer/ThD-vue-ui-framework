import { InvalidTypeError } from './errors';
import { isNumber } from './inspect';

/**
 * Генератор асинхронной задержки
 *
 * @param {number} ms
 * @returns {Promise<*>}
 */
export default function asyncDelay(ms) {
  if (!isNumber(ms)) {
    throw new InvalidTypeError(ms, 'ms', 'number');
  }

  return new Promise((resolve) => setTimeout(resolve, ms));
}
