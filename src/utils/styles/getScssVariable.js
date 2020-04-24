import variables from '@/styles/_export.scss';

/**
 * @param {String} variableKey Имя переменной
 * @returns {Object}
 */
export default function getScssVariable(variableKey) {
  return variables[variableKey];
}
