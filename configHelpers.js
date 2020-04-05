const path = require('path');

const resolve = (...args) => path.resolve(__dirname, ...args);

const aliases = {
  '@root': resolve(),
  '@': resolve('src'),
};

module.exports = {
  resolve,
  aliases,
};
