const LOCALES = {
  en: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
  ru: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЙБ'],
};

/**
 * @param {Number} bytes
 * @param {Object} [options]
 * @param {Number} [options.decimals]
 * @param {String} [options.locale]
 * @returns {String}
 * @see https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
 */
export default function formatBytes(bytes, options = {}) {
  if (bytes === 0) return '';

  const config = {
    decimals: 2,
    locale: 'en',
    ...options,
  };
  const k = 1024;

  const dm = config.decimals >= 0 ? config.decimals : 0;
  const degree = Math.floor(Math.log(bytes) / Math.log(k));
  const value = parseFloat((bytes / k ** degree).toFixed(dm));
  const unit = LOCALES[config.locale][degree];

  return `${value} ${unit}`;
}
