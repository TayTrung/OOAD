const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const CategorySchema = new Schema({
  //Không cần thuộc tính ID vì trong MongoDB sẽ tự tạo ID cho mình khi insert vào
  name: {
    type: String, // Kiểu String
    required: true //=> khi insert vào thì bắt buộc phải có "name"
  }
});

module.exports = Category = mongoose.model("category", CategorySchema);
//mongoose.model dùng để tạo  collection (model) trong db với tên là category
//Nếu mà collection không có dữ liệu thì nó sẽ hiển thị khi minh chạy lệnh "show collections" trong mongodb
//Vì thế khi tạo collections phải insert thêm dữ liệu vào thì nó mới hiển thị ra cho
//export ra để ở server.js có thể require đc
