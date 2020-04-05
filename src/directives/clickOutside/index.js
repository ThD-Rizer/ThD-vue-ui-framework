import { FrameworkError } from '@/utils/errors';

/**
 * @return {HTMLBodyElement}
 */
function container() {
  if (!document) {
    throw new FrameworkError('Can\'t execute this code on server side');
  }

  return document.querySelector('body');
}

/**
 * @param {HTMLElement} el
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function clickedInEl(el, x, y) {
  const rect = el.getBoundingClientRect();

  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

/**
 * @param {Event} e
 * @param {Array} elements
 * @return {boolean}
 */
function clickedInEls(e, elements) {
  const { clientX: x, clientY: y } = e;

  // eslint-disable-next-line no-restricted-syntax
  for (const el of elements) {
    if (clickedInEl(el, x, y)) {
      return true;
    }
  }

  return false;
}

/**
 * @param {Event} e
 * @param {HTMLElement} el
 * @param {Object} binding
 */
function directive(e, el, binding) {
  // eslint-disable-next-line no-param-reassign
  binding.args = binding.args || {};

  const isActive = (binding.args.closeConditional || (() => false));

  if (!e || isActive(e) === false) {
    return;
  }

  if (('isTrusted' in e && !e.isTrusted) || ('pointerType' in e && !e.pointerType)) {
    return;
  }

  const elements = (binding.args.include || (() => []))();

  elements.push(el);
  binding.value(e);

  // eslint-disable-next-line no-unused-expressions
  !clickedInEls(e, elements) && isActive(e) && binding.value(e);
}

export default {
  name: 'click-outside',
  inserted(el, binding) {
    const onClick = (e) => directive(e, el, binding);

    container().addEventListener('mousedown', onClick, true);

    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    el._clickOutside = onClick;
  },
  unbind(el) {
    const app = container();

    // eslint-disable-next-line no-param-reassign,no-underscore-dangle,no-unused-expressions
    app && app.removeEventListener('mousedown', el._clickOutside, true);

    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    delete el._clickOutside;
  },
};
