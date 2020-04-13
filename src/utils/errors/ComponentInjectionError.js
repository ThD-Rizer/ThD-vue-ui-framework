import FrameworkError from './FrameworkError';

/**
 * Throws when child component used not inside of provider
 */
export default class ComponentInjectionError extends FrameworkError {
  /**
   * @param {string} parent
   * @param {string} child
   */
  constructor(parent, child) {
    const message = `The child component "${child}" must be used inside of "${parent}" component`;

    super(message);
  }
}
