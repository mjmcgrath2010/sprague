const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: [path.resolve('client', 'index.js'), 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    hotUpdateChunkFilename: '.hot/hot-update.js',
    hotUpdateMainFilename: '.hot/hot-update.json',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    writeToDisk: true,
  },
}
