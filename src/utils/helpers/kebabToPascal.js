/**
 * Format string from kebab case to pascal case
 *
 * @param {String} kebab
 * @returns {String}
 */
export default function kebabToPascal(kebab) {
  /**
   * @TODO: add validations
   */

  return kebab.split('-').reduce((acc, part) => {
    const firstLetter = part.charAt(0).toLocaleUpperCase();

    return acc + firstLetter + part.substr(1).toLocaleLowerCase();
  }, '');
}
