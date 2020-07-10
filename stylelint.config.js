module.exports = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: [
    'stylelint-scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global', 'local'],
    }],
    'color-hex-length': 'long',
    'number-leading-zero': 'never',
  },
};
