import { InvalidTypeError } from './errors';
import { isNumber, isArray } from './inspect';
import cloneDeep from './cloneDeep';

/**
 * @param {Array} arr
 * @param {number} indexLeft
 * @param {number} indexRight
 * @returns {Array}
 */
export default function swapArrayElements(arr, indexLeft, indexRight) {
  if (!isArray(arr)) {
    throw new InvalidTypeError(arr, 'arr', 'Array');
  }
  if (!isNumber(indexLeft)) {
    throw new InvalidTypeError(indexLeft, 'indexLeft', 'number');
  }
  if (!isNumber(indexRight)) {
    throw new InvalidTypeError(indexRight, 'indexRight', 'number');
  }

  const arrCloned = cloneDeep(arr);

  // eslint-disable-next-line prefer-destructuring
  arrCloned[indexLeft] = arrCloned.splice(indexRight, 1, arrCloned[indexLeft])[0];

  return arrCloned;
}
