import isDate from './isDate';

/**
 * @param {Date} date
 * @returns {?Object} где `month` имеет человеческий формат (от 1 до 12)
 */
export default function convertDateToObject(date) {
  if (!isDate(date)) return null;

  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}
