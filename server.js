
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const categories = require("./routes/api/categories");
const members = require("./routes/api/members");
const products = require("./routes/api/products");
const invoices = require("./routes/api/invoices");

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
app.use("/api/member", members);
app.use("/api/member/search", members);
app.use("/api/product", products);
app.use("/api/invoice", invoices);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
