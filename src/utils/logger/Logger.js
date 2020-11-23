/* eslint-disable no-console */
import format from 'date-fns/format';
import {
  isBoolean,
  isString,
  isPlainObject,
  isFunction,
} from '../inspect';
import {
  DEFAULT_CONFIG,
  LEVELS,
  METHODS_MAP,
  STYLES,
} from './constants';
import LogModel from './LogModel';

export default class Logger {
  /**
   * @param {Object} [config]
   * @param {Function} [config.accessHandler] Обработчик с условием доступа
   * @param {String} [config.scope] Область видимости экземпляра
   * @param {String} [config.prefix] Полный префикс лога (значение начального тега)
   * @param {Boolean} [config.showTime] Флаг для отображения времени лога
   */
  constructor(config = {}) {
    const error = (...args) => {
      console.error('[Logger]: constructor()\n', ...args);
    };

    if (!isPlainObject(config)) {
      error(
        '| The "config" property is invalid!\n',
        '| Given value:', config,
      );
      return;
    }

    const {
      accessHandler,
      scope,
      prefix,
      showTime,
    } = config;

    if (accessHandler && !isFunction(accessHandler)) {
      error(
        '| The "accessHandler" option is invalid!\n',
        '| Given value:', accessHandler,
      );
      return;
    }
    if (scope && !isString(scope)) {
      error(
        '| The "scope" option is invalid!\n',
        '| Given value:', scope,
      );
      return;
    }
    if (prefix && !isString(prefix)) {
      error(
        '| The "prefix" option is invalid!\n',
        '| Given value:', prefix,
      );
      return;
    }
    if (showTime && !isBoolean(showTime)) {
      error(
        '| The "showTime" option is invalid!\n',
        '| Given value:', showTime,
      );
      return;
    }

    this.options = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  log(...args) {
    this.output(LEVELS.LOG, ...args);
  }

  info(...args) {
    this.output(LEVELS.INFO, ...args);
  }

  warn(...args) {
    this.output(LEVELS.WARN, ...args);
  }

  error(...args) {
    this.output(LEVELS.ERROR, ...args);
  }

  /**
   * @private
   */
  output(level, ...args) {
    if (!this.hasAccess()) return;

    const method = METHODS_MAP[level];
    let { prefix } = this.options;

    if (!prefix) {
      const prefixFirstLetter = level.charAt(0).toLocaleUpperCase();
      const prefixDefault = `${prefixFirstLetter}${level.substr(1).toLocaleLowerCase()}`;
      let { scope } = this.options;
      scope = scope ? `:${scope}` : '';

      prefix = `${prefixDefault}${scope}`;
    }

    let template = '%c%s%c';
    let substrings = [
      STYLES.TAG[level],
      prefix,
      null,
    ];

    if (this.options.showTime) {
      const timeNow = format(new Date(), 'HH:mm:ss.sss');

      template += ' %c%s%c';
      substrings = [
        ...substrings,
        STYLES.TAG.TIME,
        timeNow,
        null,
      ];
    }

    let isLogModelLast = false;

    [...args].forEach((argument) => {
      const isLogModel = argument instanceof LogModel;
      const newLine = isLogModelLast ? ['\n'] : [];
      const payload = (isLogModel)
        ? argument.getOutputData(level).substrings
        : [...newLine, argument];

      if (isLogModel) {
        template += ` ${argument.getOutputData(level).template}`;
      }
      substrings = [...substrings, ...payload];
      isLogModelLast = isLogModel;
    });

    console[method](template, ...substrings);
  }

  hasAccess() {
    return this.options?.accessHandler();
  }
}
