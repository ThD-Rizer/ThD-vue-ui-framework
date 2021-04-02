import { isPlainObject } from '../inspect';

/**
 * @param {Object} params
 * @param {Number} params.day
 * @param {Number} params.month От 1 до 12
 * @param {Number} params.year
 * @returns {Date | null}
 */
export default function convertObjectToDate(params) {
  if (!isPlainObject(params)) return null;

  return new Date(params.year, params.month - 1, params.day);
}
