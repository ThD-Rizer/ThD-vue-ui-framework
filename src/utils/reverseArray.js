import { InvalidTypeError } from './errors';
import { isArray } from './inspect';

/**
 * @param {Array} array
 * @returns {Array} New reversed array
 */
export default function reverseArray(array) {
  if (!isArray(array)) {
    throw new InvalidTypeError(array, 'array', 'Array');
  }

  return array.reduce((acc, element) => [element, ...acc], []);
}
