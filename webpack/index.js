'use strict';

const _ = require('lodash');
const path = require('path');

module.exports = function (opts) {
  if (typeof opts === 'string') {
    opts = {env: opts};
  }
  // opts = Object.assign({env: 'development'}, opts);
  opts = opts || {};

  // List of allowed environments
  const allowedEnvs = ['dev', 'prod', 'test'];

  let env = ((env) => {
    if (env === 'production') {
      return 'prod';
    } else if (env === 'test') {
      return 'test';
    } else if (env === 'development') {
      return 'dev';
    } else {
      // Set the correct environment
      const args = require('minimist')(process.argv.slice(2));
      if (args._.length > 0 && args._.indexOf('start') !== -1) {
        return 'test';
      } else if (args.env) {
        return args.env;
      } else {
        return 'dev';
      }
    }
  })(opts.env);

  process.env.REACT_WEBPACK_ENV = env;

  /**
   * Build the webpack configuration
   * @param  {String} wantedEnv The wanted environment
   * @return {Object} Webpack config
   */
  function buildConfig(wantedEnv) {
    let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
    let validEnv = isValid ? wantedEnv : 'dev';
    let config = require(path.join(__dirname, validEnv));
    return _.omit(config, ['debug', 'additionalPaths']);
  }

  return buildConfig(env);
};

