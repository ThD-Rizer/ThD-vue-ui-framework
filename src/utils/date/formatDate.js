import formatDateFns from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

const LOCALES = {
  ru: ruLocale,
};

/**
 * @param {Date | number} date
 * @param {string} format
 * @param {Object} options
 * @param {string} options.locale
 * @returns {string}
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
