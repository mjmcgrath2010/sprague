const path = require('path')
const APP_DIR = path.resolve('client')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {},
  output: {
    path: path.resolve('build'),
    filename: 'assets/[name].js',
    publicPath: '/',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve('client', 'index.html'),
    }),
  ],
}
