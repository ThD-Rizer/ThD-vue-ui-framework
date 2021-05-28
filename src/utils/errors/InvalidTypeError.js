import BaseError from './BaseError';

/**
 * Ошибка валидности типа
 */
export default class InvalidTypeError extends BaseError {
  /**
   * @param {*} value
   * @param {string} name
   * @param {string} type
   *
   * @example
   * throw new InvalidTypeError(str, 'str', 'string');
   */
  constructor(value, name, type) {
    const message = `Invalid type for argument "${name}", expected "${type}", got "${typeof value}"`;

    super(message);
  }
}
