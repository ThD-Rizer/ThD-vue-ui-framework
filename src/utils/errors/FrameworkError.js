import { isArray } from '@/utils/inspect';

/**
 * Ошибка
 */
export default class FrameworkError extends Error {
  /**
   * @param {String | String[]} messages
   */
  constructor(messages) {
    const message = isArray(messages) ? messages.join('. ') : messages;

    super(`[UI Framework] ${message}`);
    this.name = this.constructor.name;
  }
}
