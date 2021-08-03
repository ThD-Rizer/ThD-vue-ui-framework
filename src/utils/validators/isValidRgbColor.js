import { InvalidTypeError } from '../errors';
import { isString } from '../inspect';

const rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),\s?){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
const rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),\s?){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
const rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),\s?){2}([0-9]%|[1-9][0-9]%|100%)\)/;
const rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),\s?){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;

/**
 * @param {string} str
 * @param {boolean} includePercentValues
 * @returns {boolean}
 */
export default function isValidRgbColor(str, includePercentValues = true) {
  if (!isString(str)) {
    throw new InvalidTypeError(str, 'str', 'string');
  }

  const isValid = rgbColor.test(str) || rgbaColor.test(str);
  const isValidPercent = rgbColorPercent.test(str) || rgbaColorPercent.test(str);

  return isValid || (includePercentValues && isValidPercent);
}
