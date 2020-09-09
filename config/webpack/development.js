const path = require('path')
const webpack = require('webpack')
const APP_DIR = path.join(__dirname, '/../../client')

module.exports = {
  entry: {
    app: [path.join(APP_DIR, 'index.js'), 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true'],
  },
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    path: path.join(__dirname, '/../../public'),
    filename: 'assets/[name].bundle.js',
    hotUpdateChunkFilename: '.hot/hot-update.js',
    hotUpdateMainFilename: '.hot/hot-update.json',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    writeToDisk: true,
  },
}
