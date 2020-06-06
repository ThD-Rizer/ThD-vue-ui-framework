import { InvalidTypeError } from '../errors';
import { isNumber } from '../inspect';

/**
 * Counter factory
 *
 * @param {Number} value
 * @returns {Object}
 */
export default function makeCounter(value = 0) {
  if (!isNumber(value)) {
    throw new InvalidTypeError(value, 'value', 'Number');
  }

  let count = value;

  return {
    /**
     * @param {Number} step
     * @returns {Number}
     */
    increase(step = 1) {
      if (!isNumber(step)) {
        throw new InvalidTypeError(step, 'step', 'Number');
      }

      count += step;

      return count;
    },

    /**
     * @param {Number} step
     * @returns {Number}
     */
    decrease(step = 1) {
      if (!isNumber(step)) {
        throw new InvalidTypeError(step, 'step', 'Number');
      }

      count -= step;

      return count;
    },

    /**
     * @param {Number} newValue
     * @returns {Number}
     */
    reset(newValue = value) {
      if (!isNumber(newValue)) {
        throw new InvalidTypeError(newValue, 'newValue', 'Number');
      }

      count = newValue;

      return count;
    },

    /**
     * @returns {Number}
     */
    value() {
      return count;
    },
  };
}
