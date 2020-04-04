import { extend } from './utils';
import FrameworkError from './FrameworkError';

/**
 * Throws when child component used not inside of provider
 *
 * @param {string} parent
 * @param {string} child
 * @constructor
 */
export default function ComponentInjectionError(parent, child) {
  const message = `The child component "${child}" must be used inside of "${parent}" component`;

  FrameworkError.call(this, message);
}

extend(FrameworkError, ComponentInjectionError);
