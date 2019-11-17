const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const SupplierSchema = new Schema({
  name: {
    type: String, 
    required: true 
  },
  phone: {
    type: Number,
    required: true
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

module.exports = Supplier = mongoose.model("supplier", SupplierSchema);

