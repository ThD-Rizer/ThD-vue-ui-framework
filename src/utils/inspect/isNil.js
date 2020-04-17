/**
 * Checks if `value` is `undefined` or `null`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean}
 */
export default function isNil(value) {
  return value == null;
}
