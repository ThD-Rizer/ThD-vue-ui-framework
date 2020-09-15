import { InvalidTypeError } from './errors';
import { isArray } from './inspect';
import randomInteger from './randomInteger';

/**
 * Получить случайный элемент массива
 *
 * @param {Array} array
 * @returns {*}
 */
export default function randomArrayElement(array) {
  if (!isArray(array)) {
    throw new InvalidTypeError(array, 'array', 'Array');
  }

  return array[randomInteger(0, array.length - 1)];
}
