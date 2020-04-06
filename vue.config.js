const { aliases } = require('./configHelpers.js');

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
        prependData: '@import "@/styles/global.scss";',
      },
      css: {
        modules: {
          localIdentName: (process.env.NODE_ENV === 'production')
            ? '[hash:base64:16]'
            : '[name].[local].[hash:base64:8]',
        },
      },
    },
  },
};
