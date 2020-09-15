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
  LOG: 'LOG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
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

const COLOR_WHITE = '#ffffff';
const COLOR_BLACK = '#000000';
const COLOR_SLATEGRAY = '#708090';
const COLOR_CORNFLOWER_BLUE = '#5b92e5';
const COLOR_DODGE_BLUE = '#52aeff';
const COLOR_JAPANESE_LAUREL = '#00a000';
const COLOR_MANDY = '#e4605e';
const COLOR_ORANGE = '#ffa500';
const COLOR_GOLD = '#ffd700';

const STYLES_TAG = [
  'border-radius: 3px;',
  'padding: 2px 6px 2px 6px;',
  'line-height: 1;',
];

/**
 * @type {Readonly<Object>}
 */
export const STYLES = Object.freeze({
  TEXT: {
    [LEVELS.LOG]: `color: ${COLOR_SLATEGRAY};`,
    [LEVELS.INFO]: `color: ${COLOR_CORNFLOWER_BLUE};`,
    [LEVELS.WARN]: `color: ${COLOR_GOLD};`,
    [LEVELS.ERROR]: `color: ${COLOR_MANDY};`,
    BLUE: `color: ${COLOR_DODGE_BLUE};`,
    GREEN: `color: ${COLOR_JAPANESE_LAUREL};`,
    ORANGE: `color: ${COLOR_ORANGE};`,
  },
  TAG: {
    [LEVELS.LOG]: [
      ...STYLES_TAG,
      `background: ${COLOR_SLATEGRAY};`,
      `color: ${COLOR_WHITE};`,
    ].join(''),
    [LEVELS.INFO]: [
      ...STYLES_TAG,
      `background: ${COLOR_CORNFLOWER_BLUE};`,
      `color: ${COLOR_WHITE};`,
    ].join(''),
    [LEVELS.WARN]: [
      ...STYLES_TAG,
      `background: ${COLOR_GOLD};`,
      `color: ${COLOR_BLACK};`,
    ].join(''),
    [LEVELS.ERROR]: [
      ...STYLES_TAG,
      `background: ${COLOR_MANDY};`,
      `color: ${COLOR_WHITE};`,
    ].join(''),
  },
});
