const path = require('path');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
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
    plugins: [
      new DuplicatePackageCheckerPlugin(),
      new UnusedWebpackPlugin({
        directories: [path.join(__dirname, 'src')],
        root: __dirname,
      }),
    ],
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        additionalData: (content) => {
          const prepend = `
            @import '~@/styles/variables.scss';
            @import '~@/styles/helpers.scss';
            @import '~@/styles/mixins.scss';
          `;
          return prepend + content;
        },
      },
      css: {
        modules: {
          localIdentName,
        },
      },
    },
  },
};
