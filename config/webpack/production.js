const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve('client', 'index.js'),
  },
  output: {},
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  plugins: [],
}
