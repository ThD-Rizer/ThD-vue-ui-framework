import { InvalidTypeError } from '@/utils/errors';
import { isString } from '@/utils/inspect';

const hexColor = /^#?([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

/**
 * @param {String} str
 * @return {Boolean}
 */
export default function isValidHexColor(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'String');
  }

  return hexColor.test(str);
}
