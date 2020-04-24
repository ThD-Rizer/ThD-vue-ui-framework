import variables from '@/styles/_export.scss';

/**
 * @param {String} mapKey Префикс переменной, на основании которого будет сформирована карта
 * @returns {Object}
 */
export default function getScssVariablesMap(mapKey) {
  return Object.entries(variables).reduce(
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
