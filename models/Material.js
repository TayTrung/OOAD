const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const MaterialSchema = new Schema({
  name: {
    type: String, // Kiểu String
    required: true //=> khi insert vào thì bắt buộc phải có "name"
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = Material = mongoose.model("material", MaterialSchema);
