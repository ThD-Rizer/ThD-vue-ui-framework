import FrameworkError from './FrameworkError';

/**
 * Ошибка неверного типа
 */
export default class InvalidTypeError extends FrameworkError {
  /**
   * @param {*} value
   * @param {String} name
   * @param {String} type
   */
  constructor(value, name, type) {
    const message = `Invalid type for argument "${name}", expected "${type}", got "${typeof value}"`;

    super(message);
  }
}
