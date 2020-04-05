/**
 * Minimal Webpack config to supply to Eslint.
 * This is not actually used by Nuxt but instead mirrors the resolve and loader rules.
 */

const { aliases } = require('./configHelpers.js');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.vue'],
    alias: { ...aliases },
  },
};
