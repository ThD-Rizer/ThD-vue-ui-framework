const path = require('path');

const resolve = (...args) => path.resolve(__dirname, ...args);

const aliases = {
  '@root': resolve(),
  '@demo': resolve('demo'),
  '@': resolve('src'),
};

module.exports = {
  resolve,
  aliases,
};
