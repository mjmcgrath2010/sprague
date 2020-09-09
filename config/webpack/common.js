const path = require('path')
const APP_DIR = path.join(__dirname, '/../../client')

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
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/../../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [],
}
