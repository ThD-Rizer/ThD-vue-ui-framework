import { isArray } from '../inspect';

const ERROR_PREFIX = 'UI Framework';

/**
 * Ошибка
 */
export default class FrameworkError extends Error {
  /**
   * @param {String | String[]} messages
   */
  constructor(messages) {
    const message = isArray(messages) ? messages.join('. ') : messages;

    super(`[${ERROR_PREFIX}] ${message}`);
    this.name = this.constructor.name;
  }
}
