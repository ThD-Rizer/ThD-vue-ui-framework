import { InvalidTypeError } from './errors';
import { isArray } from './inspect';

/**
 * @param {Array} array
 * @returns {Array} Cloned array
 */
export default function cloneArray(array) {
  if (!isArray(array)) {
    throw new InvalidTypeError(array, 'array', 'Array');
  }

  return [].concat(array);
}
