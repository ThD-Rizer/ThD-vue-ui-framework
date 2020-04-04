module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
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
