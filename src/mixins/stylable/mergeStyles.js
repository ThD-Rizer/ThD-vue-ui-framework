import { isString, isArray } from '@/utils/inspect';
import { InvalidTypeError } from '@/utils/errors';

/**
 * Производит слияние стилей
 *
 * @param {Object<String>} left
 * @param {Object<String | String[]>} [right]
 * @returns {Object<String>}
 */
export default function mergeStyles(left, right = null) {
  if (!right) return left;

  const styles = { ...left };

  Object.entries(right).forEach(([styleName, value]) => {
    const isValid = (
      isString(value)
      || (isArray(value) && value.every(isString))
    );
    if (!isValid) {
      throw new InvalidTypeError(value, 'value', 'String | String[]');
    }

    const classes = isArray(value) ? value.join(' ') : value;

    styles[styleName] = styles[styleName]
      ? `${styles[styleName]} ${classes}`
      : classes;
  });

  return styles;
}
