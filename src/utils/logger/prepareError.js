import { isString } from '../inspect';

/**
 * @param {Error} error
 * @returns {Object}
 */
export default function prepareError(error) {
  if (!error) return {};

  const stack = isString(error.stack)
    ? error.stack
      .split('\n')
      .map((element) => {
        const str = element.trim();

        return str === 'Error' ? str.replace('Error', '') : str;
      })
      .filter(Boolean)
    : null;

  return {
    error: `${error.name}: ${error.message}`,
    code: error.code,
    stack,
  };
}
