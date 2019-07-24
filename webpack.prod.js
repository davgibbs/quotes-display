/* This is the config for production. It minimises code for the bundle as much as possible */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /.*\.(gif|ico|png|jpe?g)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/images/',
            publicPath: '/static/bundles/images/',
          },
        }],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/fonts/',
            publicPath: '/static/bundles/fonts/',
          },
        }],
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/fonts/',
            publicPath: '/static/bundles/fonts/',
          },
        }],
      },
    ],
  },
});
