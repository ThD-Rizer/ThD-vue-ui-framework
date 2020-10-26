import { InvalidTypeError } from '../errors';
import { isString, isPlainObject } from '../inspect';

/**
 * @param {Object} dictionary Словарь переменных
 * @param {String} mapKey Префикс переменной, на основании которого будет сформирована карта
 * @returns {Object}
 */
export default function getScssVariablesMap(dictionary, mapKey) {
  if (!isPlainObject(dictionary)) {
    throw new InvalidTypeError(dictionary, 'dictionary', 'Object');
  }
  if (!isString(mapKey)) {
    throw new InvalidTypeError(mapKey, 'mapKey', 'String');
  }

  return Object.entries(dictionary).reduce((acc, [key, value]) => {
    const regex = new RegExp(`^${mapKey}-`);

    if (!regex.test(key)) return acc;

    const variableKey = key.replace(regex, '');

    return {
      ...acc,
      [variableKey]: value,
    };
  }, {});
}
