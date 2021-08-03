import getTag from './getTag';
import isObjectLike from './isObjectLike';

/**
 * Checks if `value` is classified as a `number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `Number.isFinite` method.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @see isInteger, toInteger, toNumber
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
export default function isNumber(value) {
  return (
    typeof value === 'number'
    || (isObjectLike(value) && getTag(value) === '[object Number]')
  );
}
