var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('webpack-config');

module.exports = webpackConfig.fromObject({
  entry: {
    'bundle': './client/main.js',
  },

  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {stage: 0}},
      { test: /\.json/, loader: 'json-loader'},
    ]
  },
});
