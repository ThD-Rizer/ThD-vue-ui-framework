import { InvalidTypeError } from '../errors';
import { isArray } from '../inspect';
import randomInteger from './randomInteger';

// const random = (min, max) => {
//   let result = (max - min) + 1;
//   result *= Math.random();
//   result += min - 0.5;
//
//   return parseInt(Math.round(result), 10);
// };

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
