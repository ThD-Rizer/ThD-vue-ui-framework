import { InvalidTypeError } from '@/utils/errors';
import { isString } from '@/utils/inspect';

const hslCommaColor = /^(hsl)a?\(\s*((\+|-)?([0-9]+(\.[0-9]+)?(e(\+|-)?[0-9]+)?|\.[0-9]+(e(\+|-)?[0-9]+)?))(deg|grad|rad|turn|\s*)(\s*,\s*(\+|-)?([0-9]+(\.[0-9]+)?(e(\+|-)?[0-9]+)?|\.[0-9]+(e(\+|-)?[0-9]+)?)%){2}\s*(,\s*((\+|-)?([0-9]+(\.[0-9]+)?(e(\+|-)?[0-9]+)?|\.[0-9]+(e(\+|-)?[0-9]+)?)%?)\s*)?\)$/i;
const hslSpaceColor = /^(hsl)a?\(\s*((\+|-)?([0-9]+(\.[0-9]+)?(e(\+|-)?[0-9]+)?|\.[0-9]+(e(\+|-)?[0-9]+)?))(deg|grad|rad|turn|\s)(\s*(\+|-)?([0-9]+(\.[0-9]+)?(e(\+|-)?[0-9]+)?|\.[0-9]+(e(\+|-)?[0-9]+)?)%){2}\s*(\/\s*((\+|-)?([0-9]+(\.[0-9]+)?(e(\+|-)?[0-9]+)?|\.[0-9]+(e(\+|-)?[0-9]+)?)%?)\s*)?\)$/i;

/**
 * @param {String} str
 * @returns {Boolean}
 */
export default function isValidHSLColor(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'String');
  }

  return hslCommaColor.test(str) || hslSpaceColor.test(str);
}
