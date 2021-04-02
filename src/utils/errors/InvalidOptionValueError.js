import BaseError from './BaseError';

/**
 * Ошибка неверного значения параметра
 */
export default class InvalidOptionValueError extends BaseError {
  /**
   * @param {String} option
   * @param {String[]} [allowedValues]
   */
  constructor(option, allowedValues = []) {
    const messages = [`Invalid value given for option "${option}"`];

    if (allowedValues.length) {
      messages.push(`Allowed values: ${allowedValues.join(', ')}`);
    }

    super(messages);
  }
}
