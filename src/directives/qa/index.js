import FrameworkError from '../../utils/errors';
import { qaAttributeName } from '../../utils/constants';

export default {
  name: 'qa',
  /**
   * @param {HTMLElement} el
   * @param {string | boolean | number} value
   * @param {Object} modifiers
   */
  bind(el, { value, modifiers }) {
    const hasModifiers = !!Object.values(modifiers).length;

    //  eslint-disable-next-line max-len
    if (!['string', 'number', 'boolean'].includes(typeof value) && !hasModifiers) {
      throw new FrameworkError('Invalid value given for "qa" directive');
    }

    if (!hasModifiers) {
      el.setAttribute(qaAttributeName, value);

      return;
    }

    Object.keys(modifiers).forEach((key) => {
      el.setAttribute(
        `${qaAttributeName}-${key}`,
        typeof value === 'undefined'
          ? ''
          : value,
      );
    });
  },
  /**
   * @param {HTMLElement} el
   */
  unbind(el) {
    // Node type COMMENT
    if (el.nodeType === 8) {
      return;
    }

    Object.keys(el.attributes)
      .filter((attr) => attr.startsWith(qaAttributeName))
      .forEach((attr) => el.removeAttribute(attr));
  },
};
