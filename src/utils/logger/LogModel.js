/* eslint-disable no-console */
import { isString, isPlainObject } from '@/utils/inspect';
import { STYLES } from './constants';

/**
 * @example
 * logger.log(new LogModel({
 *   heading: 'methodName()',
 *   message: 'Data is invalid!',
 *   data: {
 *     name: nameValue,
 *     date: dateValue,
 *     props,
 *   },
 * }));
 */
export default class LogModel {
  /**
   * @param {Object} config
   * @param {String} config.heading Заголовок после тега (например имя функции)
   * @param {String} config.message Описание (вторая строка лога)
   * @param {Object} config.data Произвольные данные
   */
  constructor(config = {}) {
    if (config && !isPlainObject(config)) {
      console.error(
        '[LogModel:constructor]:\n',
        'The "config" property is invalid!\n',
        '| Given value:', config,
      );
      return;
    }

    const { heading, message, data } = config;

    if (heading && !isString(heading)) {
      console.error(
        '[Logger:constructor]:',
        'The "heading" option is invalid!\n',
        '| Given value:', heading,
      );
      return;
    }
    if (message && !isString(message)) {
      console.error(
        '[Logger:constructor]:',
        'The "message" option is invalid!\n',
        '| Given value:', message,
      );
      return;
    }
    if (data && !isPlainObject(data)) {
      console.error(
        '[Logger:constructor]:',
        'The "data" option is invalid!\n',
        '| Given value:', data,
      );
      return;
    }

    this.config = config;
  }

  /**
   * Вставить сброс строки
   * @param {Boolean} checkEmpty
   * @private
   */
  setNewLine(checkEmpty = false) {
    if (checkEmpty) {
      this.template += this.template ? '\n' : '';
    }
    this.template += '\n';
  }

  /**
   * Вставить цветную вертикальную линию
   * @param {String} level
   * @private
   */
  setStartLine(level) {
    this.template += '%c| %c';
    this.substrings.push(STYLES.TEXT[level]);
    this.substrings.push(null);
  }

  /**
   * Вставить текст цвета текущей темы браузера
   * @param {*} value
   * @private
   */
  setText(value) {
    this.template += '%s';
    this.substrings.push(value);
  }

  /**
   * Вставить булево значение выделенное цветом
   * @param {Boolean | null} value
   * @private
   */
  setBoolean(value) {
    this.template += '%c%s%c';
    this.substrings.push(STYLES.TEXT.ORANGE);
    this.substrings.push(value);
    this.substrings.push(null);
  }

  /**
   * Вставить число выделенное цветом
   * @param {Number} value
   * @private
   */
  setNumber(value) {
    this.template += '%c%f%c';
    this.substrings.push(STYLES.TEXT.BLUE);
    this.substrings.push(value);
    this.substrings.push(null);
  }

  /**
   * Вставить строку выделенное цветом
   * @param {String} value
   * @private
   */
  setString(value) {
    this.template += '%c%s%c';
    this.substrings.push(STYLES.TEXT.GREEN);
    this.substrings.push(value);
    this.substrings.push(null);
  }

  /**
   * Вставить объект или массив
   * @param {Object | Array} value
   * @private
   */
  setObject(value) {
    this.template += '%O';
    this.substrings.push(value);
  }

  /**
   * Вставить свойство объекта с ключом и значением по типу
   * @param {String} level
   * @param {String} key
   * @param {*} value
   * @private
   */
  setProperty(level, key, value) {
    this.setText(key);
    this.template += ' %c=>%c ';
    this.substrings.push(STYLES.TEXT[level]);
    this.substrings.push(null);

    if (value === null || value === undefined) {
      this.setBoolean(value);
      return;
    }

    switch (typeof value) {
      case 'boolean':
        this.setBoolean(value);
        break;
      case 'number':
        this.setNumber(value);
        break;
      case 'string':
        this.setString(value);
        break;
      case 'object':
        this.setObject(value);
        break;
      default:
        this.setText(value);
    }
  }

  /**
   * Форматировать переданные данные
   * @param {String} level
   * @private
   */
  format(level) {
    const { heading, message, data } = this.config;

    this.template = '';
    this.substrings = [];

    if (heading) {
      this.setText(heading);
    }

    if (message) {
      this.setNewLine(true);
      this.setStartLine(level);
      this.setText(message);
    }

    if (data) {
      this.setNewLine();
      Object.entries(data).forEach(([key, value]) => {
        this.setNewLine(true);
        this.setStartLine(level);
        this.setProperty(level, key, value);
      });
    }
  }

  /**
   * Вернуть отформатированные данные
   * @param {String} level Уровень лога
   * @returns {Object}
   */
  getOutputData(level) {
    this.format(level);

    return {
      template: this.template,
      substrings: this.substrings,
    };
  }
}
