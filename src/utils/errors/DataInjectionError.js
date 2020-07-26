import FrameworkError from './FrameworkError';

/**
 * Бросать, когда инъекция данных используется вне допустимого компонента
 */
export default class DataInjectionError extends FrameworkError {
  /**
   * @param {String} parent
   * @param {String} child
   */
  constructor(parent, child) {
    const message = `The injection from "${parent}" must be used inside of "${child}" component`;

    super(message);
  }
}
