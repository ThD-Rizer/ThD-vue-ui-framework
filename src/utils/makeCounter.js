import { InvalidTypeError } from './errors';
import { isNumber } from './inspect';

/**
 * Counter factory
 *
 * @param {number} value
 * @returns {Object}
 */
export default function makeCounter(value = 0) {
  if (!isNumber(value)) {
    throw new InvalidTypeError(value, 'value', 'number');
  }

  let count = value;

  return {
    /**
     * @param {number} step
     * @returns {number}
     */
    increase(step = 1) {
      if (!isNumber(step)) {
        throw new InvalidTypeError(step, 'step', 'number');
      }

      count += step;

      return count;
    },

    /**
     * @param {number} step
     * @returns {number}
     */
    decrease(step = 1) {
      if (!isNumber(step)) {
        throw new InvalidTypeError(step, 'step', 'number');
      }

      count -= step;

      return count;
    },

    /**
     * @param {number} newValue
     * @returns {number}
     */
    reset(newValue = value) {
      if (!isNumber(newValue)) {
        throw new InvalidTypeError(newValue, 'newValue', 'number');
      }

      count = newValue;

      return count;
    },

    /**
     * @returns {number}
     */
    value() {
      return count;
    },
  };
}
