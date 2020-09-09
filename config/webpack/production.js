const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const APP_DIR = path.join(__dirname, '/../../client')

module.exports = {
  entry: {
    app: path.join(APP_DIR, 'index.js'),
  },
  mode: 'production',
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
