const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const categories = require("./routes/api/categories");

const app = express();

//Bodyparese Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Mongo DB Connected")) //Kết nối thành công
  .catch(err => console.log(err)); //Lỗi kết nối với đb

//Use routes (Mỗi lần tạo 1 route mới thì phải use nó ở đây thì mới chạy đc)
app.use("/api/category", categories);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
