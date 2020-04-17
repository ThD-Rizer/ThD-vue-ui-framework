import getTag from '@/utils/inspect/getTag';
import isObjectLike from '@/utils/inspect/isObjectLike';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
export default function isBoolean(value) {
  return (
    value === true
    || value === false
    || (isObjectLike(value) && getTag(value) === '[object Boolean]')
  );
}
