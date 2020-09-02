const User = require('../models/User')

exports.params = (req, res, next, id) => {
  User.findById(id)
    .then(user => {
      req.userId = id
      req.user = user
      next()
    })
    .catch(() => {
      req.user = {}
      next()
    })
}

exports.get = (req, res) => {
  User.find({})
    .then(docs => res.json(docs))
    .catch(e => res.send('error'))
}

exports.getOne = (req, res) => {
  res.json(req.user)
}

exports.create = (req, res, next) => {
  const user = new User(req.body)
  user
    .save()
    .then(u => res.json(u))
    .catch(e => next(e))
}

exports.update = (req, res, next) => {
  req.user
    .update(req.body)
    .then(update => res.json(update))
    .catch(e => next(e))
}

exports.delete = (req, res, next) => {
  next()
}
