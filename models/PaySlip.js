const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const PaySlipSchema = new Schema({
  //Không cần thuộc tính ID vì trong MongoDB sẽ tự tạo ID cho mình khi insert vào
  idMember: {
    type: String,
    required: false
  },
  idSupplier: {
    type: String,
    required: false
  },
  createddate: {
    type: Date,
    required: false,
    default: Date.now()
  },
  totalAmt: {
    type: Number,
    required: false,
    default: 0,
  }
});

module.exports = PaySlip = mongoose.model("payslip", PaySlipSchema);
//mongoose.model dùng để tạo  collection (model) trong db với tên là payslip
//Nếu mà collection không có dữ liệu thì nó sẽ hiển thị khi minh chạy lệnh "show collections" trong mongodb
//Vì thế khi tạo collections phải insert thêm dữ liệu vào thì nó mới hiển thị ra cho
//export ra để ở server.js có thể require đc
