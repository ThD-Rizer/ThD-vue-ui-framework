import {
  // BlackholeAlreadyRegistered,
  BlackholeNotRegisteredError,
  // ElementAlreadyTransportedIntoBlackhole,
  // BlackholeElementNotFound,
} from './errors';

const targets = new Map();

/**
 * @param {string} target
 * @param {HTMLElement} el
 */
export const mount = (target, el) => {
  if (document) {
    if (!targets.has(target)) {
      throw new BlackholeNotRegisteredError(target);
    }

    const elements = targets.get(target);

    if (elements.includes(el)) {
      // throw new ElementAlreadyTransportedIntoBlackhole(target);
    }

    const targetElement = document.querySelector(`#${target}`);

    if (!targetElement) {
      // throw new BlackholeElementNotFound(target);
    }

    elements.push(el);
    targetElement.appendChild(el);
  }
};

/**
 * @param {string} target
 * @param {HTMLElement} el
 */
export const unmount = (target, el) => {
  if (document) {
    if (!targets.has(target)) {
      throw new BlackholeNotRegisteredError(target);
    }

    const elements = targets.get(target);
    const elementIndex = elements.indexOf(el);

    if (elementIndex === -1) {
      return;
    }

    elements.splice(elementIndex, 1);
    targets.set(target, elements);
    el.remove();
  }
};

/**
 * @param {string} name
 */
export const register = (name) => {
  if (targets.has(name)) {
    // throw new BlackholeAlreadyRegistered(name);
  }

  targets.set(name, []);
};

/**
 * @param {string} name
 */
export const unregister = (name) => {
  if (!targets.has(name)) {
    throw new BlackholeNotRegisteredError(name);
  }

  targets.get(name).forEach((el) => unmount(name, el));
  targets.delete(name);
};

/**
 * @returns {string[]}
 */
export const all = () => [...targets.keys()];
