import { isString, isArray } from '@/utils/inspect';

/**
 * Производит слияние стилей
 *
 * @param {Object.<string, string>} left
 * @param {Object.<string, string | string[]>} [right]
 * @returns {Object.<string, string>}
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
      return;
    }

    const classes = isArray(value) ? value.join(' ') : value;

    styles[styleName] = styles[styleName]
      ? `${styles[styleName]} ${classes}`
      : classes;
  });

  return styles;
}
