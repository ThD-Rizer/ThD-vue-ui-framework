import variables from '../../styles/export.scss';

/**
 * @param {String} mapKey Префикс переменной, на основании которого будет сформирована карта
 * @param {Object} dictionary Словарь переменных
 * @returns {Object}
 */
export default function getScssVariablesMap(mapKey, dictionary = variables) {
  return Object.entries(dictionary).reduce(
    (acc, [key, value]) => {
      const regex = new RegExp(`^${mapKey}-`);

      if (!regex.test(key)) return acc;

      const variableKey = key.replace(regex, '');

      return {
        ...acc,
        [variableKey]: value,
      };
    },
    {},
  );
}
