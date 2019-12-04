const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const RoleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  memberManagement: {
    type: Boolean,
    required: true
  },
  productManagement: {
    type: Boolean,
    required: true
  },
  categoryManagement: {
    type: Boolean,
    required: true
  },
  customerManagement: {
    type: Boolean,
    required: true
  },
  invoiceManagement: {
    type: Boolean,
    required: true
  },
  supplierManagement: {
    type: Boolean,
    required: true
  },
  billManagement: {
    type: Boolean,
    required: true
  },
  materialManagement: {
    type: Boolean,
    required: true
  },
  roleManagement: {
    type: Boolean,
    required: true
  },
  materialReceiptNoteManagement: {
    type: Boolean,
    required: true
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = Role = mongoose.model("role", RoleSchema);
