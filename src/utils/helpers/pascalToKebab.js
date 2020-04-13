import { InvalidTypeError } from '@/utils/errors';
import { isString } from '@/utils/inspect';

/**
 * Format string from `PascalCase` to `kebab-case`
 *
 * @param {String} str
 * @returns {String}
 */
export default function pascalToKebab(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'String');
  }

  const chars = str.split(/(?=[A-Z])/);

  return chars.join('-').toLocaleLowerCase();
}
