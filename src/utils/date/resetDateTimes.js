import setDate from './setDate';

/**
 * @param {Date} date
 * @returns {Date}
 */
export default function resetDateTimes(date) {
  return setDate(date, {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
}
