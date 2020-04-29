import FrameworkError from './FrameworkError';

/**
 * Бросать, когда дочерний компонент используется не внутри провайдера
 */
export default class ComponentInjectionError extends FrameworkError {
  /**
   * @param {String} parent
   * @param {String} child
   */
  constructor(parent, child) {
    const message = `The child component "${child}" must be used inside of "${parent}" component`;

    super(message);
  }
}
