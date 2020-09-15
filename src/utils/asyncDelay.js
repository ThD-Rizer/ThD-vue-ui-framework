import { InvalidTypeError } from './errors';
import { isNumber } from './inspect';

/**
 * Генератор асинхронной задержки
 *
 * @param {Number} ms
 * @returns {Promise<any>}
 */
export default function asyncDelay(ms) {
  if (!isNumber(ms)) {
    throw new InvalidTypeError(ms, 'ms', 'Number');
  }

  return new Promise((resolve) => setTimeout(resolve, ms));
}
