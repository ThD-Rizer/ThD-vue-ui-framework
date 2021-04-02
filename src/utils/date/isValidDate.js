import { isNaN } from '../inspect';

/**
 * @param {Date} date
 * @returns {Boolean}
 */
export default function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
