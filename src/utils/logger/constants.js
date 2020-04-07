/**
 * @type {Readonly<Object>}
 */
export const DEFAULT_CONFIG = Object.freeze({
  accessHandler: () => true,
  scope: '',
  prefix: '',
});

/**
 * @type {Readonly<Object>}
 */
export const LEVELS = Object.freeze({
  LOG: 'log',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
});

/**
 * @type {Readonly<Object>}
 */
export const METHODS_MAP = Object.freeze({
  [LEVELS.LOG]: 'log',
  [LEVELS.INFO]: 'info',
  [LEVELS.WARN]: 'warn',
  [LEVELS.ERROR]: 'error',
});

/**
 * @type {Array<String>}
 */
export const DEFAULT_STYLES = [
  'border-radius: 3px;',
  'padding: 2px 5px 2px 5px;',
  'line-height: 1;',
  'color: black;',
];

/**
 * @type {Readonly<Object>}
 */
export const STYLES = Object.freeze({
  [LEVELS.LOG]: [
    ...DEFAULT_STYLES,
    'background: gainsboro;',
  ],
  [LEVELS.INFO]: [
    ...DEFAULT_STYLES,
    'background: lightblue;',
  ],
  [LEVELS.WARN]: [
    ...DEFAULT_STYLES,
    'background: gold;',
  ],
  [LEVELS.ERROR]: [
    ...DEFAULT_STYLES,
    'background: firebrick;',
    'color: white;',
  ],
});
