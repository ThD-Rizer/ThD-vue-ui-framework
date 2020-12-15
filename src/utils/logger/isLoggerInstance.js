import Logger from './Logger';

/**
 * @param {*} instance
 * @returns {Boolean}
 */
export default function isLoggerInstance(instance) {
  return instance instanceof Logger;
}
