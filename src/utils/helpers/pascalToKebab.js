import { isString } from '@/utils/inspect';
import { InvalidTypeError } from '@/utils/errors';

/**
 * Format string from pascal case to kebab case
 *
 * @param {String} str
 * @returns {String}
 */
export default function pascalToKebab(str) {
  if (!isString(str)) {
    throw new InvalidTypeError({ str }, 'String');
  }

  return str.split(/(?=[A-Z])/).reduce((acc, part) => {
    const firstLetter = part.charAt(0).toLocaleUpperCase();

    return acc + firstLetter + part.substr(1).toLocaleLowerCase();
  }, '');
}
