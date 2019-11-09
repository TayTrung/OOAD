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

app.use("/api/category", require("./routes/api/categories"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/authentication"));
app.use("/api/materials", require("./routes/api/materials"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
