const router = require('express').Router()
const controller = require('../services/shopify/index')

router.route('/shopify').get(controller.shopifyAuthRequest)

module.exports = router
