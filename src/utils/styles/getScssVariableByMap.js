import { InvalidTypeError } from '../errors';
import { isString, isPlainObject } from '../inspect';

const SEPARATOR = '-';

/**
 * @param {Object} dictionary Словарь переменных
 * @param {string} mapKey Префикс переменной, на основании которого будет сформирована карта
 * @param {string} variableKey Имя переменной
 * @returns {*}
 */
export default function getScssVariableByMap(dictionary, mapKey, variableKey) {
  if (!isPlainObject(dictionary)) {
    throw new InvalidTypeError(dictionary, 'dictionary', 'Object');
  }
  if (!isString(mapKey)) {
    throw new InvalidTypeError(mapKey, 'mapKey', 'string');
  }
  if (!isString(variableKey)) {
    throw new InvalidTypeError(variableKey, 'variableKey', 'string');
  }

  return dictionary[`${mapKey}${SEPARATOR}${variableKey}`];
}
