import isPlainObject from './isPlainObject';

/**
 * @param {Object} value
 * @returns {boolean}
 */
export default function isEmptyObject(value) {
  if (!isPlainObject(value)) return false;

  return !Object.keys(value).length;
}
