/**
 * Parent's child extending
 *
 * @param {Function | ErrorConstructor} parent
 * @param {Function} child
 */
export function extend(parent, child) {
  const originPrototype = child.prototype;

  // eslint-disable-next-line no-param-reassign
  child.prototype = Object.create(parent.prototype);

  Object.keys(originPrototype).forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    child.prototype[key] = originPrototype[key];
  });

  Object.defineProperty(child.prototype, 'constructor', {
    enumerable: false,
    value: child,
  });
}
