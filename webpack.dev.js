/* This is the config for development. It uses webpack-dev-server */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/static/bundles/',
  },
  devServer: {
    contentBase: __dirname + '/apps/frontend/bundles',
    port: 3000,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    watchOptions: {
      ignored: /node_modules/
    },
  },
});
