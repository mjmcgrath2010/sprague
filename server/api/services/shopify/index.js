const Shopify = require('shopify-api-node')

exports.auth = (req, res, next) => {
  const shopify = new Shopify({
    shopName: req.query.shop,
    accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  })
}
