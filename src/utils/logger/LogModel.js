/* eslint-disable no-console */
import {
  isNil,
  isInteger,
  isArray,
  isPlainObject,
  isEmptyObject,
} from '../inspect';
import { cloneDeep } from '../index';
import { STYLES } from './constants';
import prepareError from './prepareError';

export default class LogModel {
  /**
   * @param {Object} config
   * @param {Array} [config.tags] Список тегов после тега области (первая строка лога)
   * @param {Array} [config.messages] Список строк описания (вторая и далее строки лога)
   * @param {Object} [config.data] Именованные свойства
   * @param {*} [config.epilog] Произвольные данные (после всех вышеописанных данных)
   */
  constructor(config) {
    this.props = {};
    this.template = '';
    this.substrings = [];

    const isValid = LogModel.validateConfig(config);

    if (isValid) {
      this.props = cloneDeep(config);
    }
  }

  /**
   * @param {Object} config
   * @returns {Boolean}
   * @private
   */
  static validateConfig(config) {
    const error = (...args) => {
      console.error('[LogModel] validateConfig()\n', ...args);
    };

    if (!isPlainObject(config)) {
      error('The "config" property is invalid!\n', '| Given value:', config);
      return false;
    }

    const { tags, messages, data } = config;

    if (tags && !isArray(tags)) {
      error('The "tags" option is invalid!\n', '| Given value:', tags);
      return false;
    }
    if (messages && !isArray(messages)) {
      error('The "messages" option is invalid!\n', '| Given value:', messages);
      return false;
    }
    if (data && !isPlainObject(data)) {
      error('The "data" option is invalid!\n', '| Given value:', data);
      return false;
    }

    return true;
  }

  /**
   * Инъекция данных инстанса логгера
   * @params {Array} tags
   * @returns {Boolean}
   */
  injectLoggerData(tags) {
    const [, str] = prepareError(new Error()).stack;
    const [, filename] = str.match(/\/(\w+)\.(jsx?|tsx?|vue)/);
    const isLoggerCaller = filename === 'Logger';

    if (!isLoggerCaller) return false;

    this.props.tags = this.props.tags ? [...tags, ...this.props.tags] : tags;

    return true;
  }

  /**
   * Подготовить переданные данные
   * @param {String} level
   * @private
   */
  prepareData(level) {
    if (isEmptyObject(this.props)) return;

    const {
      tags, messages, data, epilog,
    } = this.props;

    this.template = '';
    this.substrings = [];

    if (tags) {
      tags.forEach((tag) => {
        this.appendTag(level, tag);
      });
    }

    if (messages) {
      messages.forEach((message) => {
        this.appendNewLine();
        this.appendStartLine(level);
        this.appendText(message);
      });
    }

    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        this.appendNewLine();
        this.appendStartLine(level, '> ');
        this.appendProperty({ level, key, value });
      });
    }

    if (epilog) {
      this.appendNewLine();
      this.appendText(epilog);
    }
  }

  /**
   * Добавить свойство объекта с ключом и значением по типу
   * @param {Object} payload
   * @param {String} payload.level
   * @param {String} payload.key
   * @param {*} payload.value
   * @private
   */
  appendProperty({ level, key, value }) {
    if (key) {
      this.appendText(key);
      this.template += ' %c=>%c ';
      this.substrings.push(STYLES.TEXT[level]);
      this.substrings.push('');
    }

    if (isNil(value)) {
      this.appendBoolean(value);
      return;
    }

    if (value instanceof Error) {
      this.appendText(value);
      return;
    }

    switch (typeof value) {
      case 'boolean':
        this.appendBoolean(value);
        break;
      case 'number':
        this.appendNumber(value);
        break;
      case 'string':
        this.appendString(value);
        break;
      case 'symbol':
        this.appendSymbol(value);
        break;
      case 'object':
        this.appendObject(value);
        break;
      default:
        this.appendText(value);
    }
  }

  /**
   * Добавить сброс строки
   * @private
   */
  appendNewLine() {
    this.template += '\n';
  }

  /**
   * Добавить цветную вертикальную линию
   * @param {String} level
   * @param {String} [suffix]
   * @private
   */
  appendStartLine(level, suffix = '') {
    this.template += `%c| ${suffix}%c`;
    this.substrings.push(STYLES.TEXT[level]);
    this.substrings.push('');
  }

  /**
   * Добавить тэг
   * @param {String} level
   * @param {*} value
   * @private
   */
  appendTag(level, value) {
    if (this.template) {
      this.template += '%c>';
      this.substrings.push(STYLES.TAG_SEPARATOR[level]);
    }
    this.template += '%c%s%c';
    this.substrings.push(STYLES.TAG[level]);
    this.substrings.push(value);
    this.substrings.push('');
  }

  /**
   * Добавить текст цвета текущей темы браузера
   * @param {*} value
   * @private
   */
  appendText(value) {
    this.template += '%s';
    this.substrings.push(value);
  }

  /**
   * Добавить булево значение выделенное цветом
   * @param {Boolean | null | undefined} value
   * @private
   */
  appendBoolean(value) {
    this.template += '%c%s%c';
    this.substrings.push(STYLES.TEXT.BOOLEAN);
    this.substrings.push(value);
    this.substrings.push('');
  }

  /**
   * Добавить число выделенное цветом
   * @param {Number} value
   * @private
   */
  appendNumber(value) {
    const substitution = isInteger(value) ? '%i' : '%f';

    this.template += `%c${substitution}%c`;
    this.substrings.push(STYLES.TEXT.NUMBER);
    this.substrings.push(value);
    this.substrings.push('');
  }

  /**
   * Добавить строку выделенное цветом
   * @param {String} value
   * @private
   */
  appendString(value) {
    this.template += '%c%s%c';
    this.substrings.push(STYLES.TEXT.STRING);
    this.substrings.push(value);
    this.substrings.push('');
  }

  /**
   * Добавить символ
   * @param {Symbol} value
   * @private
   */
  appendSymbol(value) {
    this.template += '%c%s%c';
    this.substrings.push(STYLES.TEXT.SYMBOL);
    this.substrings.push(value.toString());
    this.substrings.push('');
  }

  /**
   * Добавить объект или массив
   * @param {Object | Array} value
   * @private
   */
  appendObject(value) {
    this.template += '%O';
    this.substrings.push(value);
  }

  /**
   * Вернуть отформатированные данные
   * @param {String} level Уровень лога
   * @returns {Object}
   */
  getOutputData(level) {
    this.prepareData(level);

    return {
      template: this.template,
      substrings: this.substrings,
    };
  }
}
