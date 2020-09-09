require('dotenv').config()

const mode = process.env.NODE_ENV || 'production'
const common = require('./common')
const server = require('./server')

let config
let envConfig

try {
  envConfig = require(`./${mode}`)
} catch (e) {
  console.log(`Error loading webpack config for env: ${mode}`, e)
  envConfig = require('./production')
}

config = {
  ...common,
  ...envConfig,
  mode,
  entry: {
    ...common.entry,
    ...envConfig.entry,
  },
  output: {
    ...common.output,
    ...envConfig.output,
  },
  plugins: [...common.plugins, ...envConfig.plugins],
}

module.exports = [config, server]
