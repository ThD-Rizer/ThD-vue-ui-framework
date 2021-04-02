import BaseError from '@/utils/errors';

/**
 * @returns {HTMLBodyElement}
 */
function container() {
  if (!document) {
    throw new BaseError('Can\'t execute this code on server side');
  }

  return document.querySelector('body');
}

/**
 * @param {HTMLElement} element
 * @param {Number} x
 * @param {Number} y
 * @returns {Boolean}
 */
function clickedInElement(element, x, y) {
  const rect = element.getBoundingClientRect();

  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

/**
 * @param {Event} event
 * @param {Array} elements
 * @returns {Boolean}
 */
function clickedInElements(event, elements) {
  const { clientX: x, clientY: y } = event;

  // eslint-disable-next-line no-restricted-syntax
  for (const element of elements) {
    if (clickedInElement(element, x, y)) {
      return true;
    }
  }

  return false;
}

/**
 * @param {Event} event
 * @param {HTMLElement} element
 * @param {Object} binding
 */
function directive(event, element, binding) {
  // eslint-disable-next-line no-param-reassign
  binding.args = binding.args || {};

  /**
   * @TODO: кажется избыточным, проверить можно ли удалить внутреннюю функцию и оставить примитивы
   */
  const isActive = (binding.args.closeConditional || (() => false));

  if (!event || isActive(event) === false) {
    return;
  }

  if (
    ('isTrusted' in event && !event.isTrusted)
    || ('pointerType' in event && !event.pointerType)
  ) {
    return;
  }

  /**
   * @TODO: кажется избыточным, проверить можно ли удалить внутреннюю функцию и оставить примитивы
   */
  const elements = (binding.args.include || (() => []))();

  elements.push(element);
  binding.value(event);

  if (!clickedInElements(event, elements) && isActive(event)) {
    binding.value(event);
  }
}

export default {
  name: 'clickOutside',

  /**
   * @param {HTMLElement} element
   * @param {Object} binding
   */
  inserted(element, binding) {
    const onClick = (event) => directive(event, element, binding);

    container().addEventListener('mousedown', onClick, true);

    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    element._clickOutside = onClick;
  },

  /**
   * @param {HTMLElement} element
   */
  unbind(element) {
    const app = container();

    if (app) {
      // eslint-disable-next-line no-underscore-dangle
      app.removeEventListener('mousedown', element._clickOutside, true);
    }

    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    delete element._clickOutside;
  },
};
