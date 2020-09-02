const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

AccountSchema.methods = {}

module.exports = mongoose.model('account', AccountSchema)
