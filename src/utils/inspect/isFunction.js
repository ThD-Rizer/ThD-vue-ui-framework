/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isFunction(class Any{})
 * // => true
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(function * Any() {})
 * // => true
 *
 * isFunction(Math.round)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
export default function isFunction(value) {
  return typeof value === 'function';
}
