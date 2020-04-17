/**
 * Checks if `value` is `null`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(void 0);
 * // => false
 */
export default function isNull(value) {
  return value === null;
}
