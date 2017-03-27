'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');


let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack/hot/only-dev-server',
    './client/app/index'
  ],
  cache: true,
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot-loader!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [path.join(__dirname, '/../client')]
  )
});

module.exports = config;
