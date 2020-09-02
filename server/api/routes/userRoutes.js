const router = require('express').Router()
const controller = require('../controllers/User')

router.param('id', controller.params)

router
  .route('/')
  .get(controller.get)
  .post(controller.create)

router
  .route('/:id')
  .get(controller.getOne)
  .post(controller.update)

module.exports = router
