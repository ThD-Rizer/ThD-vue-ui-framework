import { isNumber } from '@/utils/inspect';

/**
 * @param {Number} value
 * @returns {Object}
 */
export default function makeCounter(value = 0) {
  if (!isNumber(value)) {
    throw new Error(`Invalid type for argument "value", expected "number" got "${typeof value}"`);
  }

  let count = value;

  return {
    /**
     * @param {Number} step
     * @returns {Number}
     */
    increase(step = 1) {
      if (!isNumber(step)) {
        throw new Error(`Invalid type for argument "step", expected "number" got "${typeof step}"`);
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
        throw new Error(`Invalid type for argument "step", expected "number" got "${typeof step}"`);
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
        throw new Error(`Invalid type for argument "newValue", expected "number" got "${typeof newValue}"`);
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
