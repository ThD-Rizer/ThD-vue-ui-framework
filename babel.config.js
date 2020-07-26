module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    test: {
      presets: ['@vue/cli-plugin-babel/preset'],
      plugins: [
        ['module-resolver', {
          root: ['./src'],
          alias: {
            '@': './src',
          },
        }],
      ],
    },
  },
};
