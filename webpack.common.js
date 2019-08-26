/* This is the Webpack config common to both production and development */

const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  context: __dirname + '/apps/display/static/display',
  entry: {
    app: './js/index.js',
  },
  output: {
    path: __dirname + '/apps/display/static/display/bundles',
    filename: '[name].[hash].js',
  },
  plugins: [
    new BundleTracker({
      filename: './apps/webpack-stats.json',
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /.*\.(png|jpe?g)$/,
        use: 'file-loader',
      },
    ],
  },
};
