const path = require('path')
const APP_DIR = path.join(__dirname, '/../../client')

module.exports = {
  entry: path.join(APP_DIR, 'index.js'),
  mode: 'production',
  plugins: [],
}
