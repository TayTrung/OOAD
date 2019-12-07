const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

//Bodyparese Middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("Mongo DB Connected"))
  .catch(err => console.log(err));

// mongoose.connection
//   .collection("counters")
//   .insertOne({ _id: "Category", sequence_value: 0 }, (err, res) => {
//     if (err) throw err;
//     console.log("Document inserted");
//   });

app.use("/api/category", require("./routes/api/categories"));
app.use("/api/user", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/authentication"));
app.use("/api/role", require("./routes/api/roles"));

app.use("/api/member", require("./routes/api/members"));
app.use("/api/product", require("./routes/api/products"));
app.use("/api/invoice", require("./routes/api/invoices"));
app.use("/api/payslip", require("./routes/api/payslips"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
