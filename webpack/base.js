'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '../www'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    // path: path.join(__dirname, '/../client/dist/assets'),
    // filename: 'app.js',
    publicPath: defaultSettings.publicPath,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.html', '.styl'],

    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      containers: `${defaultSettings.srcPath}/containers/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      utils: `${defaultSettings.srcPath}/utils/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {}
};
