/* This is the Webpack config common to both production and development */

const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: './apps/frontend/js/index.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
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
