import { InvalidTypeError } from './errors';
import { isString } from './inspect';

/**
 * Format string from `PascalCase` to `kebab-case`
 *
 * @param {string} str
 * @returns {string}
 */
export default function pascalToKebab(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'string');
  }

  const chars = str.split(/(?=[A-Z])/);

  return chars.join('-').toLocaleLowerCase();
}
