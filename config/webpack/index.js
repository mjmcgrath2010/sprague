require('dotenv').config()

const env = process.env.NODE_ENV
const common = require('./common')

let config
let envConfig

try {
  envConfig = require(`./${env}`)
} catch (e) {
  console.log(`Error loading webpack config for env: ${env}`, e)
  envConfig = require('./production')
}

config = { ...common, ...envConfig, plugins: [...envConfig.plugins, ...common.plugins] }

module.exports = config
