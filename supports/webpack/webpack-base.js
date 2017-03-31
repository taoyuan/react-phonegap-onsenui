
const path = require('path');
const webpack = require('webpack');

const srcPath = path.join(process.cwd(), 'src');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// const npmBase = path.join(__dirname, '../node_modules');
// const additionalPaths = [];

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'www'),
    publicPath: '',
  }, options.output), // Merge with env dependent settings


  resolve: {
    // extensions: ['.js', '.jsx', '.json', '.css', '.html', '.styl'],

    alias: {
      services: `${srcPath}/services/`,
      components: `${srcPath}/components/`,
      containers: `${srcPath}/containers/`,
      utils: `${srcPath}/utils/`,
      config: `${srcPath}/config/` + (process.env.REACT_WEBPACK_ENV || 'prod'),
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    },
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.html', '.styl', '.react.js'],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.join(process.cwd(), 'src')].concat(options.additionalPaths || []),
        exclude: /node_modules/,
        query: options.babelQuery,
      },
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
  },

  plugins: options.plugins.concat([
    // new webpack.ProvidePlugin({
    //   // make fetch available
    //   fetch: 'exports-loader?self.fetch!whatwg-fetch',
    // }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(options.env),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ]),
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
