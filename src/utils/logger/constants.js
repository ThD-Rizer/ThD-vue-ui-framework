import { freezeDeep } from '../index';

/**
 * @type {Readonly<Object>}
 */
export const DEFAULT_CONFIG = {
  scope: '',
  tags: [],
  accessHandler: () => true,
};
Object.freeze(DEFAULT_CONFIG);

/**
 * @type {Readonly<Object>}
 */
export const LEVELS = {
  LOG: 'log',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};
Object.freeze(LEVELS);

/**
 * @type {Readonly<Object>}
 */
export const COLORS = {
  MINE_SHAFT: '#202020',
  SLATEGRAY: '#878e96',
  SULU: '#b0f365',
  PORTAGE: '#8a6cf1',
  CORNFLOWER_BLUE: '#5b92e5',
  DODGE_BLUE: '#52aeff',
  JAPANESE_LAUREL: '#00a000',
  MANDY: '#e4605e',
  ORANGE: '#ffa500',
  GOLD: '#ffd700',
  WHITE: '#ffffff',
};
Object.freeze(COLORS);

const STYLES_TAG = [
  'border-radius: 3px;',
  'padding: 2px 5px 2px 5px;',
];
const STYLES_TAG_SEPARATOR = [
  'padding: 0 3px 0 3px;',
  'font-size: 10px;',
];

const TEXT = {
  [LEVELS.LOG]: `color: ${COLORS.SULU};`,
  [LEVELS.INFO]: `color: ${COLORS.CORNFLOWER_BLUE};`,
  [LEVELS.WARN]: `color: ${COLORS.GOLD};`,
  [LEVELS.ERROR]: `color: ${COLORS.MANDY};`,
  BOOLEAN: `color: ${COLORS.ORANGE};`,
  STRING: `color: ${COLORS.JAPANESE_LAUREL};`,
  NUMBER: `color: ${COLORS.DODGE_BLUE};`,
  SYMBOL: `color: ${COLORS.PORTAGE};`,
};

const TAG = {
  [LEVELS.LOG]: [
    ...STYLES_TAG,
    `background: ${COLORS.SULU};`,
    `color: ${COLORS.MINE_SHAFT};`,
  ].join(''),
  [LEVELS.INFO]: [
    ...STYLES_TAG,
    `background: ${COLORS.CORNFLOWER_BLUE};`,
    `color: ${COLORS.WHITE};`,
  ].join(''),
  [LEVELS.WARN]: [
    ...STYLES_TAG,
    `background: ${COLORS.GOLD};`,
    `color: ${COLORS.MINE_SHAFT};`,
  ].join(''),
  [LEVELS.ERROR]: [
    ...STYLES_TAG,
    `background: ${COLORS.MANDY};`,
    `color: ${COLORS.WHITE};`,
  ].join(''),
};

const TAG_SEPARATOR = {
  [LEVELS.LOG]: [
    ...STYLES_TAG_SEPARATOR,
    TEXT[LEVELS.LOG],
  ].join(''),
  [LEVELS.INFO]: [
    ...STYLES_TAG_SEPARATOR,
    TEXT[LEVELS.INFO],
  ].join(''),
  [LEVELS.WARN]: [
    ...STYLES_TAG_SEPARATOR,
    TEXT[LEVELS.WARN],
  ].join(''),
  [LEVELS.ERROR]: [
    ...STYLES_TAG_SEPARATOR,
    TEXT[LEVELS.ERROR],
  ].join(''),
};

/**
 * @type {Readonly<Object>}
 */
export const STYLES = {
  TEXT,
  TAG,
  TAG_SEPARATOR,
};
freezeDeep(STYLES);
