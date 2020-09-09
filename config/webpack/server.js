const path = require('path')
const nodeExternals = require('webpack-node-externals')

const SERVER_DIR = path.join(__dirname, '/../../server')

module.exports = {
  target: 'node',
  entry: {
    server: [path.join(SERVER_DIR, 'index.js')],
  },
  output: {
    path: path.join(__dirname, '/../../build'),
    filename: 'server/index.js',
  },
  externals: [nodeExternals()],
}
