/**
 * Checks if `value` is `undefined` or `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean}
 */
export default function isNil(value) {
  return value == null;
}
