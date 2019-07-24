/* This is the config for development. It uses webpack-dev-server with detailed source maps */

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/apps/display/static/display/bundles',
    port: 3000,
    watchOptions: {
      ignored: /node_modules/
    },
  },
  output: {
    publicPath: 'http://localhost:3000/static/bundles/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/apps/display/static/display/dev/dev_index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /.*\.(gif|ico|png|jpe?g)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            publicPath: 'http://localhost:3000/static/bundles/images/',
          },
        }],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: 'http://localhost:3000/static/bundles/fonts/',
          },
        }],
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: 'http://localhost:3000/static/bundles/fonts/',
          },
        }],
      },
    ],
  },
});
