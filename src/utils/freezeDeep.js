import { isObjectLike } from './inspect';

/**
 * @param {Object | Array} value
 * @returns {Readonly<Object | Array>}
 */
export default function freezeDeep(value) {
  if (!isObjectLike(value)) return value;

  Object.freeze(value);
  Object.getOwnPropertyNames(value).forEach((key) => {
    const prop = value[key];

    if (isObjectLike(prop) && !Object.isFrozen(prop)) {
      freezeDeep(prop);
    }
  });

  return value;
}
