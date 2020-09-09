require('dotenv').config()

const env = process.env.NODE_ENV
const common = require('./common')
const server = require('./server')

let config
let envConfig

try {
  envConfig = require(`./${env}`)
} catch (e) {
  console.log(`Error loading webpack config for env: ${env}`, e)
  envConfig = require('./production')
}

config = {
  ...common,
  ...envConfig,
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
