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
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },

    ],
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    proxy: {
      '/api': 'http://localhost:7400',
    },
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './app/public/favicon.ico',
      template: './app/public/index.html',
    }),
  ],
};
