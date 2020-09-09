const path = require('path')
const nodeExternals = require('webpack-node-externals')

const mode = process.env.NODE_ENV || 'production'
const SERVER_DIR = path.join(__dirname, '/../../server')

module.exports = {
  target: 'node',
  mode,
  entry: {
    server: [path.join(SERVER_DIR, 'index.js')],
  },
  output: {
    path: path.join(__dirname, '/../../build'),
    filename: 'server/index.js',
  },
  externals: [nodeExternals()],
}
