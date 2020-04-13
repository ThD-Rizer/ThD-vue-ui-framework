import FrameworkError from './FrameworkError';

/**
 * Throws when function options is not value
 */
export default class InvalidOptionValueError extends FrameworkError {
  /**
   * @param {String} option
   * @param {Array<String>?} allowedValues
   */
  constructor(option, allowedValues = []) {
    const messages = [`Invalid value given for option "${option}"`];

    if (allowedValues.length) {
      messages.push(`Allowed values: ${allowedValues.join(', ')}`);
    }

    super(messages);
  }
}
