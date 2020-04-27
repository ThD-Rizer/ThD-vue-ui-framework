import { InvalidTypeError } from '@/utils/errors';
import { isString } from '@/utils/inspect';
import isValidHexColor from '@/utils/validators/isValidHexColor';
import isValidHSLColor from '@/utils/validators/isValidHSLColor';
import isValidRgbColor from '@/utils/validators/isValidRgbColor';

const safeColor = /^[a-z]{3,}$/i;

/**
 * @param {String} str
 * @return {Boolean}
 */
export default function isValidCssColor(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'String');
  }

  return (
    safeColor.test(str)
    || isValidHexColor(str)
    || isValidHSLColor(str)
    || isValidRgbColor(str)
  );
}
