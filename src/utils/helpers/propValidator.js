import { Logger } from '../logger';

const logger = new Logger({
  scope: 'propValidator',
});

/**
 * Vue property validator
 *
 * @param {String} name
 * @param {Array} options
 * @returns {{ validator: Function }}
 */
export default function propValidator(name, options) {
  return {
    validator: (value) => {
      if (options.includes(value)) {
        return true;
      }

      logger.warn(
        `The "${name}" property is invalid!\n`,
        '| Given value:', value, '\n',
        '| Available options:', options,
      );

      return false;
    },
  };
}
