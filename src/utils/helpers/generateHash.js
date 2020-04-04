import { isNumber } from '@/utils/inspect';

/**
 * Generate random hash with given length
 *
 * @param {Number} length
 * @returns {String}
 */
export default function generateHash(length = 8) {
  if (!isNumber(length)) {
    throw new Error(`Invalid type for argument "length", expected "number" got "${typeof length}"`);
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let result = '';

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
