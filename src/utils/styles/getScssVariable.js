import { InvalidTypeError } from '../errors';
import { isString, isPlainObject } from '../inspect';

/**
 * @param {Object} dictionary Словарь переменных
 * @param {String} variableKey Имя переменной
 * @returns {Object}
 */
export default function getScssVariable(dictionary, variableKey) {
  if (!isPlainObject(dictionary)) {
    throw new InvalidTypeError(dictionary, 'dictionary', 'Object');
  }
  if (!isString(variableKey)) {
    throw new InvalidTypeError(variableKey, 'variableKey', 'String');
  }

  return dictionary[variableKey];
}
