import { isNaN } from '@/utils/inspect';

/**
 * @param {*} value
 * @return {Boolean}
 */
export default function isValidDate(value) {
  return (
    value instanceof Date
    && !isNaN(value)
  );
}
