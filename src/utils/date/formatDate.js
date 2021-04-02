import formatDateFns from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

const LOCALES = {
  ru: ruLocale,
};

/**
 * @param {Date | Number} date
 * @param {String} format
 * @param {Object} options
 * @param {String} options.locale
 * @returns {String}
 */
export default function formatDate(date, format, options = {}) {
  const optionsCloned = { ...options };
  const locale = options.locale ? LOCALES[options.locale] : LOCALES.ru;

  delete optionsCloned.locale;

  return formatDateFns(date, format, {
    locale,
    ...optionsCloned,
  });
}
