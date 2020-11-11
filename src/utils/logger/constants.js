/**
 * @type {Readonly<Object>}
 */
export const DEFAULT_CONFIG = Object.freeze({
  accessHandler: () => true,
  scope: '',
  prefix: '',
  showTime: true,
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

/**
 * @type {Readonly<Object>}
 */
export const COLORS = Object.freeze({
  BLACK: '#000000',
  SLATEGRAY: '#708090',
  CORNFLOWER_BLUE: '#5b92e5',
  DODGE_BLUE: '#52aeff',
  JAPANESE_LAUREL: '#00a000',
  MANDY: '#e4605e',
  ORANGE: '#ffa500',
  GOLD: '#ffd700',
  POLAR: '#e9f6fa',
  WHITE: '#ffffff',
});

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
    [LEVELS.LOG]: `color: ${COLORS.SLATEGRAY};`,
    [LEVELS.INFO]: `color: ${COLORS.CORNFLOWER_BLUE};`,
    [LEVELS.WARN]: `color: ${COLORS.GOLD};`,
    [LEVELS.ERROR]: `color: ${COLORS.MANDY};`,
    BLUE: `color: ${COLORS.DODGE_BLUE};`,
    GREEN: `color: ${COLORS.JAPANESE_LAUREL};`,
    ORANGE: `color: ${COLORS.ORANGE};`,
  },
  TAG: {
    [LEVELS.LOG]: [
      ...STYLES_TAG,
      `background: ${COLORS.SLATEGRAY};`,
      `color: ${COLORS.WHITE};`,
    ].join(''),
    [LEVELS.INFO]: [
      ...STYLES_TAG,
      `background: ${COLORS.CORNFLOWER_BLUE};`,
      `color: ${COLORS.WHITE};`,
    ].join(''),
    [LEVELS.WARN]: [
      ...STYLES_TAG,
      `background: ${COLORS.GOLD};`,
      `color: ${COLORS.BLACK};`,
    ].join(''),
    [LEVELS.ERROR]: [
      ...STYLES_TAG,
      `background: ${COLORS.MANDY};`,
      `color: ${COLORS.WHITE};`,
    ].join(''),
    TIME: [
      ...STYLES_TAG,
      `background: ${COLORS.POLAR};`,
      `color: ${COLORS.SLATEGRAY};`,
    ].join(''),
  },
});
