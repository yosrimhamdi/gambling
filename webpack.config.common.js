const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  outer: {
    mode: process.env.NODE_ENV,
    entry: {
      'landing-page-1': '/src/entries/landing-page-1.js',
      'landing-page-2': '/src/entries/landing-page-2.js',
      'landing-page-3': '/src/entries/landing-page-3.js',
      'landing-page-4': '/src/entries/landing-page-4.js',
    },
  },
  open: '/landing-page-1.html',
  templates: [
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
