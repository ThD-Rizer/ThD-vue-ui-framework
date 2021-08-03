import { isPlainObject } from '../inspect';

/**
 * @param {Object} params
 * @param {number} params.day
 * @param {number} params.month От 1 до 12
 * @param {number} params.year
 * @returns {?Date}
 */
export default function convertObjectToDate(params) {
  if (!isPlainObject(params)) return null;

  return new Date(params.year, params.month - 1, params.day);
}
