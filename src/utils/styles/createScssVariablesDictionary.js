import { InvalidTypeError } from '../errors';
import { isPlainObject } from '../inspect';

/**
 * @param {Object} dictionary
 * @param {String} key
 * @param {*} value
 * @returns {Object}
 */
function prepareDeepVariables(dictionary, key, value) {
  const isDeepNesting = key.includes('-');

  if (isDeepNesting) {
    const [, groupKey, deepKey] = key.match(/(\w+)-([-\w]+)/);
    const group = dictionary[groupKey] || {};

    return {
      ...dictionary,
      [groupKey]: prepareDeepVariables(group, deepKey, value),
    };
  }

  return {
    ...dictionary,
    [key]: value,
  };
}

/**
 * Создание словаря scss переменных
 *
 * @param {Object} variables
 * @returns {Object}
 */
export default function createScssVariablesDictionary(variables) {
  if (!isPlainObject(variables)) {
    throw new InvalidTypeError(variables, 'variables', 'Object');
  }

  return Object.entries(variables).reduce((acc, [key, value]) => (
    prepareDeepVariables(acc, key, value)
  ), {});
}
