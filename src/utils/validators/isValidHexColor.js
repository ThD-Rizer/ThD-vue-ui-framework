import { InvalidTypeError } from '../errors';
import { isString } from '../inspect';

const hexColor = /^#?([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

/**
 * @param {String} str
 * @returns {Boolean}
 */
export default function isValidHexColor(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'String');
  }

  return hexColor.test(str);
}
