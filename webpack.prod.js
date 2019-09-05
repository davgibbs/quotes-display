/* This is the config for production. It minimises code for the bundle as much as possible */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: __dirname + '/apps/frontend/dist/',
    publicPath: '/static/dist/'
  },
});
