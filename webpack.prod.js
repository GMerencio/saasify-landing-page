const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
       test: /\.(s*)css$/,
       use: [
         MiniCssExtractPlugin.loader,
         'css-loader',
         'postcss-loader',
         'sass-loader'
       ]
     }
    ]
  }
});