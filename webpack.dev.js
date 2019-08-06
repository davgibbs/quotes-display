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
});
