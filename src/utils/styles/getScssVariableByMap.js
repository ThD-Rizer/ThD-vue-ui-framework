import variables from '../../styles/export.scss';

/**
 * @param {String} mapKey Префикс переменной, на основании которого будет сформирована карта
 * @param {String} variableKey Имя переменной
 * @param {Object} dictionary Словарь переменных
 * @returns {*}
 */
export default function getScssVariableByMap(mapKey, variableKey, dictionary = variables) {
  return dictionary[`${mapKey}-${variableKey}`];
}
