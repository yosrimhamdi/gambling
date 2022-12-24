const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonWebpackConfig = require('./webpack.config.common');

module.exports = {
  ...commonWebpackConfig,
  plugins: [
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
