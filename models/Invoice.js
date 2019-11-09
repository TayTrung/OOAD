const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const InvoiceSchema = new Schema({
  //Không cần thuộc tính ID vì trong MongoDB sẽ tự tạo ID cho mình khi insert vào
  idMember: {
    type: String,
    required: true
  },
  idUser: {
    type: String,
    required: true
  },
  totalAmt: {
    type: Number,
    required: true,
    default: 0
  },
  createddate: {
    type: Date,
    required: false,
    default: new Date()
  },
  comments: {
    type: String,
    required: false,
  }
});

module.exports = Invoice = mongoose.model("invoice", InvoiceSchema);
//mongoose.model dùng để tạo  collection (model) trong db với tên là member
//Nếu mà collection không có dữ liệu thì nó sẽ hiển thị khi minh chạy lệnh "show collections" trong mongodb
//Vì thế khi tạo collections phải insert thêm dữ liệu vào thì nó mới hiển thị ra cho
//export ra để ở server.js có thể require đc
