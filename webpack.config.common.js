const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  open: '/landing-page-1.html',
  outer: {
    mode: process.env.NODE_ENV,
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
    output: {
      path: __dirname + '/dist/',
      filename: 'js/[name].js',
    },
  },
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
};
