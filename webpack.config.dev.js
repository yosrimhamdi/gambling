const { outer, plugins, open } = require('./webpack.config.common');

module.exports = {
  devServer: {
    compress: true,
    port: 3000,
    open,
    hot: true,
    watchFiles: './src/html/*.html',
  },
  ...outer,
  plugins: [...plugins],
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
};
