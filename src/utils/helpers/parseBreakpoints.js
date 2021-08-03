import { isUndefined, isNull, isString } from '../inspect';

/**
 * @param {string | Object | null | undefined} breakpoints
 * @returns {Object.<string, number | boolean>}
 */
export default function parseBreakpoints(breakpoints) {
  if (isUndefined(breakpoints) || isNull(breakpoints)) {
    return {};
  }

  if (isString(breakpoints)) {
    return breakpoints.split(' ')
      .map((_) => _.split('-'))
      .reduce((acc, [breakpoint, value]) => ({
        ...acc,
        [breakpoint]: isUndefined(value) ? true : value,
      }), {});
  }

  return breakpoints;
}
