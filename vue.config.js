const { aliases } = require('./configHelpers.js');

const isDevelopment = process.env.NODE_ENV === 'development';
const localIdentName = isDevelopment
  ? '[name]__[local]--[hash:base64:8]'
  : '[hash:base64:8]';

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
