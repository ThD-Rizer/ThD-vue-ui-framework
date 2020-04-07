/**
 * Минимальная конфигурация Webpack для поставки в Eslint.
 * На самом деле это не используется в Nuxt, но вместо этого содержит правила разрешения и загрузки.
 */

const { aliases } = require('./configHelpers.js');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.vue'],
    alias: { ...aliases },
  },
};
