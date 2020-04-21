const { aliases } = require('./configHelpers.js');

const isProduction = process.env.NODE_ENV === 'production';
const localIdentName = isProduction
  ? '[hash:base64:8]'
  : '[name]__[local]_[hash:base64:8]';

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        ...aliases,
      },
    },
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        prependData: () => (`
          @import "@/styles/_variables.scss";
          @import "@/styles/_helpers.scss";
          @import "@/styles/_mixins.scss";
        `),
      },
      css: {
        modules: {
          localIdentName,
        },
      },
    },
  },
};
