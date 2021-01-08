import { createScssVariablesDictionary } from '@/utils/styles';
import variables from '@/styles/export.scss';

/**
 * @type {Object}
 */
export const STYLE_VARIABLES = Object.freeze(createScssVariablesDictionary(variables));

/**
 * @type {Readonly<Object>}
 */
export const BREAKPOINTS = Object.freeze(STYLE_VARIABLES.breakpoints);

/**
 * @type {Readonly<Object>}
 */
export const COLORS = Object.freeze(STYLE_VARIABLES.colors);
