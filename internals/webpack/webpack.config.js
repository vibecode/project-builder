'use strict';

const webpack = require('webpack');
const path = require('path');

const input = path.join(process.cwd(), './src/js/');
const output = path.join(process.cwd(), $.config.output, '/assets/js');

const config = {

  context: input,

  entry: {
    app: './app.js',
    vendor: [
      'jquery',
      'lodash'
    ]
  },

  output: {
    path: output,
    filename: '[name].js'
  },

  watch: $.dev,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: $.dev ? 'inline-source-map' : undefined,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ]
};

if (!$.dev) {
  config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        warnings: false,
        drop_console: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      })
  );
}

module.exports = config;
