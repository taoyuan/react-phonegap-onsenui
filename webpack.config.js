const path = require('path');

// List of allowed environments
const allowedEnvs = ['dev', 'prod', 'test'];
const args = require('minimist')(process.argv.slice(2));

const env = args.env || 'dev';

process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  const validEnv = isValid ? wantedEnv : 'dev';
  const config = require(path.join(__dirname, `supports/webpack/webpack-${validEnv}`));
  return config;
}

module.exports = buildConfig(env);
