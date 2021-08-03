import { isNaN } from '../inspect';

/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isValidDate(value) {
  return (
    value instanceof Date
    && !isNaN(value.getTime())
  );
}
