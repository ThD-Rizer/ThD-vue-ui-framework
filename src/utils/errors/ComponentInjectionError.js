import BaseError from './BaseError';

/**
 * Бросать, когда дочерний компонент используется не внутри провайдера
 */
export default class ComponentInjectionError extends BaseError {
  /**
   * @param {string} parent
   * @param {string} child
   */
  constructor(parent, child) {
    const message = `The child component "${child}" must be used inside of "${parent}" component`;

    super(message);
  }
}
