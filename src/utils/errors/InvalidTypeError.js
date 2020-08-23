import BaseError from './BaseError';

/**
 * Ошибка валидности типа
 */
export default class InvalidTypeError extends BaseError {
  /**
   * @param {*} value
   * @param {String} name
   * @param {String} type
   */
  constructor(value, name, type) {
    const message = `Invalid type for argument "${name}", expected "${type}" got "${typeof value}"`;

    super(message);
  }
}
