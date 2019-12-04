const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  name: {
    type: String, 
    required: true 
  },
  idRole: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now()
    
  }
});

module.exports = User = mongoose.model("user", UserSchema);
