const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "es2015", "react" ]
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  }
}