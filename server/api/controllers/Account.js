const Account = require('../models/Account')

exports.params = (req, res, next, id) => {
  Account.findById(id)
    .then(account => {
      req.account = account
      next()
    })
    .catch(() => {
      req.account = {}
      next()
    })
}

exports.get = (req, res) => {
  Account.find({})
    .then(docs => res.json(docs))
    .catch(e => res.send('error'))
}

exports.getOne = (req, res) => {
  res.json(req.account)
}

exports.create = (req, res, next) => {
  const account = new Account(req.body)
  account
    .save()
    .then(u => res.json(u))
    .catch(e => next(e))
}

exports.update = (req, res, next) => {
  req.account
    .update(req.body)
    .then(update => res.json(update))
    .catch(e => next(e))
}

exports.delete = (req, res, next) => {
  next()
}
