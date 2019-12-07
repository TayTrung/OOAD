const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  idRole: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },
})

module.exports = User = mongoose.model('user', UserSchema)
