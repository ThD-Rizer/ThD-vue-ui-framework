import { extend } from './utils';

/**
 * Base error
 *
 * @param {String | Array} message
 * @constructor
 */
export default function FrameworkError(message) {
  this.message = `[UI Framework] ${Array.isArray(message) ? message.join('. ') : message}`;
}

extend(Error, FrameworkError);
