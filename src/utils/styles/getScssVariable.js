import variables from '../../styles/export.scss';

/**
 * @param {String} variableKey Имя переменной
 * @param {Object} dictionary Словарь переменных
 * @returns {Object}
 */
export default function getScssVariable(variableKey, dictionary = variables) {
  return dictionary[variableKey];
}
