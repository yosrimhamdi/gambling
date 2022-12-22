const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'landing-page-1': '/src/sass/landing-page-1.sass',
    'landing-page-2': '/src/sass/landing-page-2.sass',
    'landing-page-3': '/src/sass/landing-page-3.sass',
    'landing-page-4': '/src/sass/landing-page-4.sass',
    'toggle-popup': '/src/js/toggle-popup.js',
  },
  output: {
    path: __dirname + '/dist/',
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // ...[1, 2, 3, 4].map(
    //   i =>
    //     new HtmlWebpackPlugin({
    //       template: `src/html/landing-page-${i}.html`,
    //       filename: `landing-pages/landing-page-${i}.html`,
    //       inject: false,
    //     })
    // ),
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.html$/i,
      //   use: 'html-loader',
      // },
      // {
      //   test: /\.(png|jpg|svg)$/i,
      //   type: 'asset/resource',
      //   use: [
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         pngquant: {
      //           quality: [0.9, 0.95],
      //         },
      //       },
      //     },
      //   ],
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 10 * 1024,
      //     },
      //   },
      //   generator: {
      //     filename: 'images/[name]-[hash][ext]',
      //   },
      // },
    ],
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
