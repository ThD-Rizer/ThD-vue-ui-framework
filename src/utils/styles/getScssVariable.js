import variables from '@/styles/export.scss';

/**
 * @param {String} variableKey Имя переменной
 * @returns {Object}
 */
export default function getScssVariable(variableKey) {
  return variables[variableKey];
}
