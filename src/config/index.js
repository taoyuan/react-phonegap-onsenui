const env = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
    case 'prod':
      return 'prod';
    case 'test':
      return 'test';
    default:
      return 'dev';
  }
})();

module.exports = require(`./${env}`);
