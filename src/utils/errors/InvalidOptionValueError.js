import { extend } from './utils';
import FrameworkError from './FrameworkError';

/**
 * Throws when function options is not value
 *
 * @param {String} option
 * @param {Array<String>?} allowedValues
 * @constructor
 */
export default function InvalidOptionValueError(option, allowedValues = []) {
  const messages = [`Invalid value given for option "${option}"`];

  if (allowedValues.length) {
    messages.push(`Allowed values: ${allowedValues.join(', ')}`);
  }

  FrameworkError.call(this, messages);
}

extend(FrameworkError, InvalidOptionValueError);
