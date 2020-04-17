/**
 * Checks if `value` is `undefined`
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0);
 * // => true
 *
 * isUndefined(null);
 * // => false
 */
export default function isUndefined(value) {
  return value === undefined;
}
