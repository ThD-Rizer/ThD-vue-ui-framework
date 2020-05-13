import { isUndefined, isNull, isString } from '@/utils/inspect';

/**
 * @param {String | Object | null | undefined} breakpoints
 * @returns {Object<String, Number | Boolean>}
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
