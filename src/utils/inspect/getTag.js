/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
export default function getTag(value) {
  if (value === undefined) {
    return '[object Undefined]';
  }
  if (value === null) {
    return '[object Null]';
  }

  return Object.prototype.toString.call(value);
}
