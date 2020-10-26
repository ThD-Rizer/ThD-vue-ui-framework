import { InvalidTypeError } from '../errors';
import { isString, isPlainObject } from '../inspect';

/**
 * @param {Object} dictionary Словарь переменных
 * @param {String} mapKey Префикс переменной, на основании которого будет сформирована карта
 * @param {String} variableKey Имя переменной
 * @returns {*}
 */
export default function getScssVariableByMap(dictionary, mapKey, variableKey) {
  if (!isPlainObject(dictionary)) {
    throw new InvalidTypeError(dictionary, 'dictionary', 'Object');
  }
  if (!isString(mapKey)) {
    throw new InvalidTypeError(mapKey, 'mapKey', 'String');
  }
  if (!isString(variableKey)) {
    throw new InvalidTypeError(variableKey, 'variableKey', 'String');
  }

  return dictionary[`${mapKey}-${variableKey}`];
}
