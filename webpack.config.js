'use strict';

const _ = require('lodash');
const path = require('path');

// List of allowed environments
const allowedEnvs = ['dev', 'prod', 'test'];
const args = require('minimist')(process.argv.slice(2));

const env = args.env || 'prod';

process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  const validEnv = isValid ? wantedEnv : 'prod';
  return require(path.join(__dirname, `webpack/webpack-${validEnv}`));
  // return _.omit(config, ['debug', 'additionalPaths']);
}

module.exports = buildConfig(env);
