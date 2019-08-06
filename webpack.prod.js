/* This is the config for production. It minimises code for the bundle as much as possible */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'nosources-source-map',
  output: {
    publicPath: '/static/bundles/',
  },
});
