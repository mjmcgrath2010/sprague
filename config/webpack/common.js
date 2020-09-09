const path = require('path')
const APP_DIR = path.join(__dirname, '/../../client')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {},
  output: {
    path: path.join(__dirname, '/../../build'),
    filename: 'assets/[name].js',
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
      template: path.join(APP_DIR, 'index.html'),
    }),
  ],
}
