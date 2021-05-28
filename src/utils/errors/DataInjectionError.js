import BaseError from './BaseError';

/**
 * Бросать, когда инъекция данных используется вне допустимого компонента
 */
export default class DataInjectionError extends BaseError {
  /**
   * @param {string} parent
   * @param {string} child
   */
  constructor(parent, child) {
    const message = `The injection from "${parent}" must be used inside of "${child}" component`;

    super(message);
  }
}
