var path =  require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './app/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './app/public/favicon.ico',
      template: './app/public/index.html',
    }),
  ],
};
