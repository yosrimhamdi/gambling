const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'landing-page-1': '/src/sass/landing-page-1.sass',
    'landing-page-2': '/src/sass/landing-page-2.sass',
    'landing-page-3': [
      '/src/sass/landing-page-3.sass',
      '/src/js/toggle-popup.js',
    ],
    'landing-page-4': [
      '/src/sass/landing-page-4.sass',
      '/src/js/toggle-popup.js',
    ],
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    ...[1, 2, 3, 4].map(
      i =>
        new HtmlWebpackPlugin({
          template: `src/html/landing-page-${i}.html`,
          filename: `landing-page-${i}.html`,
          chunks: [`landing-page-${i}`],
          inject: true,
        })
    ),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    port: 3000,
    open: '/landing-page-1.html',
    hot: true,
  },
};
