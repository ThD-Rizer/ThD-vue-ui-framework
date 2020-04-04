import { extend } from './utils';
import FrameworkError from './FrameworkError';

/**
 * Throws when trying to move element into Blackhole which not registered
 *
 * @param {String} name
 */
export default function BlackholeNotRegistered(name) {
  FrameworkError.call(this, `Blackhole with name "${name}" not registered`);
}

extend(FrameworkError, BlackholeNotRegistered);
