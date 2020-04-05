import { FrameworkError } from '@/utils/errors';
import { QA_ATTRIBUTE_NAME } from '@/constants';

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
      el.setAttribute(QA_ATTRIBUTE_NAME, value);

      return;
    }

    Object.keys(modifiers).forEach((key) => {
      el.setAttribute(
        `${QA_ATTRIBUTE_NAME}-${key}`,
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
      .filter((attr) => attr.startsWith(QA_ATTRIBUTE_NAME))
      .forEach((attr) => el.removeAttribute(attr));
  },
};
