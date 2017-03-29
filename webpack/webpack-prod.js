'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack-base');

const config = Object.assign({}, baseConfig, {
  entry: {
    app: path.resolve(__dirname, '../src/main'),
    vendor: ['react', 'react-dom', 'onsenui', 'react-onsenui']
  },
  cache: false,
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '..', 'src', 'index.html')
    }, {
      from: path.join(__dirname, '..', 'src', 'icon.png')
    }, {
      from: path.join(__dirname, '..', 'src', 'assets'),
      to: 'assets'
    }]),
  ]
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [].concat(
    config.additionalPaths,
    [path.join(__dirname, '../src')]
  )
});

module.exports = config;
