import { createScssVariablesDictionary } from '@/utils/styles';
import variables from '@/styles/export.scss';

/**
 * @type {Readonly<Object>}
 */
export const STYLE_VARIABLES = createScssVariablesDictionary(variables);
Object.freeze(STYLE_VARIABLES);

/**
 * @type {Readonly<Object>}
 */
export const BREAKPOINTS = STYLE_VARIABLES.breakpoints;
Object.freeze(BREAKPOINTS);

/**
 * @type {Readonly<Object>}
 */
export const COLORS = STYLE_VARIABLES.colors;
Object.freeze(COLORS);
