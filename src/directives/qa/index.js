import { QA_ATTRIBUTE_NAME } from '@/constants';
import BaseError from '@/utils/errors';

export default {
  name: 'qa',

  /**
   * @param {HTMLElement} element
   * @param {String | Boolean | Number} value
   * @param {Object} modifiers
   */
  bind(element, { value, modifiers }) {
    const hasModifiers = !!Object.values(modifiers).length;

    if (!['string', 'number', 'boolean'].includes(typeof value) && !hasModifiers) {
      throw new BaseError('Invalid value given for "qa" directive');
    }

    if (!hasModifiers) {
      element.setAttribute(QA_ATTRIBUTE_NAME, value);

      return;
    }

    Object.keys(modifiers).forEach((key) => {
      const val = (typeof value === 'undefined') ? '' : value;

      element.setAttribute(`${QA_ATTRIBUTE_NAME}-${key}`, val);
    });
  },

  /**
   * @param {HTMLElement} element
   */
  unbind(element) {
    // Node type COMMENT
    if (element.nodeType === 8) return;

    Object.keys(element.attributes)
      .filter((attribute) => attribute.startsWith(QA_ATTRIBUTE_NAME))
      .forEach((attribute) => element.removeAttribute(attribute));
  },
};
