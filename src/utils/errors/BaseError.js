import { isArray } from '../inspect';

const ERROR_PREFIX = '[UI Framework] ';

export default class BaseError extends Error {
  /**
   * @param {string | string[]} messages
   */
  constructor(messages) {
    const message = isArray(messages) ? messages.join('. ') : messages;

    super(`${ERROR_PREFIX}${message}`);
    this.name = this.constructor.name;
  }
}
