import variables from '@/styles/_export.scss';

/**
 * @param {String} mapKey Префикс переменной, на основании которого будет сформирована карта
 * @param {String} variableKey Имя переменной
 * @returns {*}
 */
export default function getScssVariableByMap(mapKey, variableKey) {
  return variables[`${mapKey}-${variableKey}`];
}
