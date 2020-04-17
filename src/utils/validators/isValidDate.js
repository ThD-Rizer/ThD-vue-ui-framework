import { isNaN } from '@/utils/inspect';

/**
 * @param {*} value
 * @returns {Boolean}
 */
export default function isValidDate(value) {
  return (
    value instanceof Date
    && !isNaN(value)
  );
}
