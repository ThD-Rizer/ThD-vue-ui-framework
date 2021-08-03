import { InvalidTypeError } from '../errors';
import { isString } from '../inspect';
import isValidHexColor from './isValidHexColor';
import isValidHSLColor from './isValidHSLColor';
import isValidRgbColor from './isValidRgbColor';

const safeColor = /^[a-z]{3,}$/i;

/**
 * @param {string} str
 * @returns {boolean}
 */
export default function isValidCssColor(str) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'string');
  }

  return (
    safeColor.test(str)
    || isValidHexColor(str)
    || isValidHSLColor(str)
    || isValidRgbColor(str)
  );
}
