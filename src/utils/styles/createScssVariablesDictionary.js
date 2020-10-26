import { InvalidTypeError } from '../errors';
import { isPlainObject } from '../inspect';

const SEPARATOR = '-';

/**
 * @param {Object} dictionary
 * @param {String} key
 * @param {*} value
 * @returns {Object}
 */
function prepareDeepVariables(dictionary, key, value) {
  if (!key) return dictionary;

  const isDeepNesting = key.includes(SEPARATOR);

  if (!isDeepNesting) {
    return {
      ...dictionary,
      [key]: value,
    };
  }

  const regex = new RegExp(`^(\\w+)${SEPARATOR}([${SEPARATOR}\\w]+)$`);
  const [, groupKey, deepKey] = key.match(regex);
  const group = dictionary[groupKey] || {};

  return {
    ...dictionary,
    [groupKey]: prepareDeepVariables(group, deepKey, value),
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
