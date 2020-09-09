require('dotenv').config()

const _ = require('lodash')
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

config = _.merge(common, envConfig)

module.exports = config
