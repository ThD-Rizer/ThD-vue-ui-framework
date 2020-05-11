import { getScssVariablesMap } from '@/utils/styles';

/**
 * @example
 * Возвращает объект с точками останова, содержащими границы диапазона
 * {
 *   xs: {
 *     min: '0px',
 *     max: '575px',
 *   },
 *   ...
 * }
 * @returns {Object}
 */
function getPrependBreakpoints() {
  const grid = getScssVariablesMap('grid');

  return Object.entries(grid).reduce((acc, [key, value]) => {
    const [, breakpoint, range] = key.match(/(\w+)-(\w+)/);

    return {
      ...acc,
      [breakpoint]: {
        ...acc[breakpoint],
        [range]: value,
      },
    };
  }, {});
}

/**
 * @type {Readonly<Object>}
 */
export const BREAKPOINTS = Object.freeze(getPrependBreakpoints());
