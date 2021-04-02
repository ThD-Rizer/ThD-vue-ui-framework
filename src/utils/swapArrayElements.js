import cloneDeep from './cloneDeep';

/**
 * @param {Array} arr
 * @param {Number} indexA
 * @param {Number} indexB
 * @returns {Array}
 */
export default function swapArrayElements(arr, indexA, indexB) {
  if (arr.length === 1) return arr;

  const arrCloned = cloneDeep(arr);

  arrCloned.splice(indexB, 1, arrCloned.splice(indexA, 1, arrCloned[indexB])[0]);

  return arrCloned;
}
