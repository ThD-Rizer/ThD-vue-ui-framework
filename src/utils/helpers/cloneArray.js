import { isArray } from '@/utils/inspect';

/**
 * Returns cloned array
 *
 * @param {Array} array
 * @returns {Array}
 */
export default function cloneArray(array) {
  if (!isArray(array)) {
    throw new Error(`Invalid type for argument "array", expected "array" got "${typeof array}"`);
  }

  return [].concat(array);
}
