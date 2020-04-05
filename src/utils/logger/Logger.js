import { isString, isPlainObject, isFunction } from '@/utils/inspect';
import {
  DEFAULT_CONFIG,
  LEVELS,
  METHODS_MAP,
  STYLES,
} from '@/utils/logger/constants';

export default class Logger {
  /**
   * @TODO: заменить "console.error" на "throw" в проверках условий.
   * Реализовать в виде Assert.
   *
   * @param {Object} config
   * @param {Function} config.accessHandler
   * @param {String} config.scope
   * @param {String} config.prefix
   */
  constructor(config = {}) {
    if (config && !isPlainObject(config)) {
      // eslint-disable-next-line no-console
      console.error(
        '[Logger:constructor]:',
        'The "config" property is invalid!\n',
        '| Given value:', config,
      );
      return;
    }

    const { accessHandler, scope, prefix } = config;

    if (accessHandler && !isFunction(accessHandler)) {
      // eslint-disable-next-line no-console
      console.error(
        '[Logger:constructor]:',
        'The "accessHandler" option is invalid!\n',
        '| Given value:', accessHandler,
      );
      return;
    }
    if (scope && !isString(scope)) {
      // eslint-disable-next-line no-console
      console.error(
        '[Logger:constructor]:',
        'The "scope" option is invalid!\n',
        '| Given value:', scope,
      );
      return;
    }
    if (prefix && !isString(prefix)) {
      // eslint-disable-next-line no-console
      console.error(
        '[Logger:constructor]:',
        'The "prefix" option is invalid!\n',
        '| Given value:', prefix,
      );
      return;
    }

    this.options = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  log(...attrs) {
    this.output(LEVELS.LOG, ...attrs);
  }

  info(...attrs) {
    this.output(LEVELS.INFO, ...attrs);
  }

  warn(...attrs) {
    this.output(LEVELS.WARN, ...attrs);
  }

  error(...attrs) {
    this.output(LEVELS.ERROR, ...attrs);
  }

  output(level, ...attrs) {
    if (!this.hasAccess()) return;

    const firstLetter = level.charAt(0).toLocaleUpperCase();
    const prefixDefault = `${firstLetter}${level.substr(1)}`;
    const { scope } = this.options;
    let { prefix } = this.options;

    if (!prefix) {
      prefix = `[${prefixDefault}`;
      prefix += scope ? `:${scope}` : '';
      prefix += ']:';
    }

    const method = METHODS_MAP[level];
    const styles = STYLES[level].join(' ');

    // eslint-disable-next-line no-console
    console[method](`%c${prefix}`, styles, ...attrs);
  }

  hasAccess() {
    return this.options.accessHandler();
  }
}
