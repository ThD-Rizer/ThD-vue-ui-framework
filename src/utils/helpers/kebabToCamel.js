/**
 * Format string from kebab case to camel case
 *
 * @param {String} kebab
 * @returns {String}
 */
export default function kebabToCamel(kebab) {
  /**
   * @TODO: add validations
   */

  return Object.entries(kebab.split('-'))
    .reduce((acc, [index, part]) => {
      if (Number(index) === 0) {
        return acc + part.toLocaleLowerCase();
      }

      const firstLetter = part.charAt(0).toLocaleUpperCase();

      return acc + firstLetter + part.substr(1).toLocaleLowerCase();
    }, '');
}
