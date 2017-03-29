'use strict';
const path = require('path');

const srcPath = path.join(__dirname, '../src');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// const npmBase = path.join(__dirname, '../node_modules');
const additionalPaths = [];

module.exports = {
  additionalPaths,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '../www'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    // publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.html', '.styl'],

    alias: {
      actions: `${srcPath}/actions/`,
      components: `${srcPath}/components/`,
      containers: `${srcPath}/containers/`,
      sources: `${srcPath}/sources/`,
      stores: `${srcPath}/stores/`,
      styles: `${srcPath}/styles/`,
      utils: `${srcPath}/utils/`,
      config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      //   loader: 'url-loader?limit=8192&name=assets/[name].[hash].[ext]'
      // },
      // {
      //   test: /\.(mp4|ogg|svg)$/,
      //   loader: 'file-loader'
      // }
    ]
  }
};
