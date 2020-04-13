import { InvalidTypeError } from '@/utils/errors';
import { isArray } from '@/utils/inspect';

/**
 * Returns cloned array
 *
 * @param {Array} array
 * @returns {Array}
 */
export default function cloneArray(array) {
  if (!isArray(array)) {
    throw new InvalidTypeError(array, 'array', 'Array');
  }

  return [].concat(array);
}
