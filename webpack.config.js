const webpack = require('webpack');
const path = require('path');

const publicPath = '/';

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    publicPath: publicPath
  },

  resolve: {
    modules: ['node_modules', 'src']
  },

  devServer: {
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "es2015", "react", "stage-2" ]
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
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ]
  }
}