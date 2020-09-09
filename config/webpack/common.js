const path = require('path')
const APP_DIR = path.join(__dirname, '/../../client')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
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
  target: 'web',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/../../public'),
    filename: 'assets/[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.join(APP_DIR, 'index.html'),
    }),
  ],
}
