const { aliases } = require('./configHelpers.js');

const isDevelopment = process.env.NODE_ENV === 'development';
const localIdentName = isDevelopment
  ? '[name]__[local]--[hash:base64:8]'
  : '[hash:base64:8]';

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ],
    },
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
          @import "@/styles/variables.scss";
          @import "@/styles/helpers.scss";
          @import "@/styles/mixins.scss";
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
