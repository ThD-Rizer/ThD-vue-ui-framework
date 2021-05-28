/* eslint-disable no-console */
import {
  isString,
  isArray,
  isPlainObject,
  isFunction,
} from '../inspect';
import { DEFAULT_CONFIG, LEVELS } from './constants';
import LogModel from './LogModel';

export default class Logger {
  /**
   * @param {Object} [config]
   * @param {string} [config.scope] Область применения
   * @param {Array} [config.tags] Список тегов после тега области (первая строка лога)
   * @param {function} [config.accessHandler] Обработчик с условием доступа
   */
  constructor(config = {}) {
    this.isLoggerInstance = true;
    this.options = { ...DEFAULT_CONFIG };

    const isValid = Logger.validateConfig(config);

    if (isValid) {
      this.options = { ...this.options, ...config };
    }
  }

  /**
   * @param {Object} config
   * @returns {boolean}
   * @private
   */
  static validateConfig(config) {
    const error = (...args) => {
      console.error('[Logger] validateConfig()\n', ...args);
    };

    if (!isPlainObject(config)) {
      error('The "config" property is invalid!\n', '| Given value:', config);
      return false;
    }

    const { scope, tags, accessHandler } = config;

    if (scope && !isString(scope)) {
      error('The "scope" option is invalid!\n', '| Given value:', scope);
      return false;
    }
    if (tags && !isArray(tags)) {
      error('The "tags" option is invalid!\n', '| Given value:', tags);
      return false;
    }
    if (accessHandler && !isFunction(accessHandler)) {
      error('The "accessHandler" option is invalid!\n', '| Given value:', accessHandler);
      return false;
    }

    return true;
  }

  /**
   * @param {...*} args
   * @returns {void}
   */
  log(...args) {
    this.output(LEVELS.LOG, ...args);
  }

  /**
   * @param {...*} args
   * @returns {void}
   */
  info(...args) {
    this.output(LEVELS.INFO, ...args);
  }

  /**
   * @param {...*} args
   * @returns {void}
   */
  warn(...args) {
    this.output(LEVELS.WARN, ...args);
  }

  /**
   * @param {...*} args
   * @returns {void}
   */
  error(...args) {
    this.output(LEVELS.ERROR, ...args);
  }

  /**
   * @param {Array} args
   * @returns {boolean}
   * @private
   */
  static checkModelOnlyOne(args) {
    const models = args.filter((argument) => argument instanceof LogModel);

    return models.length <= 1;
  }

  /**
   * @param {Array} args
   * @returns {?LogModel}
   * @private
   */
  static getModelFromArgs(args) {
    return args.find((argument) => argument instanceof LogModel) || null;
  }

  /**
   * @param {string} level
   * @param {Array} args
   * @param {boolean} [firstLogModelInjected = false]
   * @returns {Object}
   * @private
   */
  static prepareData(level, args, firstLogModelInjected = false) {
    let templateOutput = '';
    let substringsOutput = [];
    let isLogModelLast = false;

    /**
     * @param {string} template
     * @param {Array} substrings
     * @returns {void}
     */
    const setOutputData = (template, substrings) => {
      templateOutput += template;
      substringsOutput = [...substringsOutput, ...substrings];
    };

    args.forEach((argument) => {
      const isLogModel = argument instanceof LogModel;

      if (isLogModel) {
        const { template, substrings } = argument.getOutputData(level);

        if (!template) return;

        setOutputData(template, substrings);
      } else {
        const newLine = isLogModelLast && !firstLogModelInjected ? ['\n'] : [];
        const payload = [...newLine, argument];
        setOutputData('', payload);
      }

      isLogModelLast = isLogModel;
    });

    return {
      template: templateOutput,
      substrings: substringsOutput,
    };
  }

  /**
   * @param {string} level
   * @param {...*} args
   * @returns {void}
   * @private
   */
  output(level, ...args) {
    if (!this.hasAccess()) return;

    const argsData = [...args];

    if (!Logger.checkModelOnlyOne(argsData)) {
      console.error('[Logger] output()\n', '| Only one "LogModel" can be transferred');
      return;
    }

    const scope = this.options.scope ? `:${this.options.scope}` : '';
    const tagScope = `${level}${scope}`;
    const tags = [tagScope, ...(this.options.tags || [])];
    const logModel = Logger.getModelFromArgs(argsData);
    let firstLogModelInjected = false;

    if (logModel) {
      logModel.injectLoggerData(this, tags);
    } else {
      argsData.unshift(new LogModel({ tags }));
      firstLogModelInjected = true;
    }

    const { template, substrings } = Logger.prepareData(level, argsData, firstLogModelInjected);

    console[level](template, ...substrings);
  }

  /**
   * @returns {boolean}
   * @private
   */
  hasAccess() {
    return this.options?.accessHandler();
  }
}
