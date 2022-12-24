const { outer, templates } = require('./webpack.config.common');

module.exports = {
  devServer: {
    compress: true,
    port: 3000,
    open: '/landing-page-1.html',
    hot: true,
  },
  ...outer,
  plugins: [...templates],
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
