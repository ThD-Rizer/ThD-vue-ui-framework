import getTag from './getTag';
import isArray from './isArray';
import isObjectLike from './isObjectLike';

/**
 * Checks if `value` is classified as a `string` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 */
export default function isString(value) {
  return (
    typeof value === 'string'
    || (
      isObjectLike(value)
      && !isArray(value)
      && getTag(value) === '[object String]'
    )
  );
}
