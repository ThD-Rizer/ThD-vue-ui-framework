import { extend } from './utils';
import FrameworkError from './FrameworkError';

/**
 * @param {Object} context
 * @return {Object}
 */
function getVariableInfo(context) {
  const [name] = Object.keys(context);
  const value = context[name];

  return {
    name,
    value,
  };
}

/**
 * Type error
 *
 * @param {Object} context
 * @param {String} type
 * @constructor
 */
export default function InvalidTypeError(context, type) {
  const { name, value } = getVariableInfo(context);

  this.message = `Invalid type for argument "${name}", expected "${type}" got "${typeof value}"`;
}

extend(FrameworkError, InvalidTypeError);
