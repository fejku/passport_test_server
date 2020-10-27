const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}, () => {console.log("Connected")});

const userRouter = require("./routes/User");
app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("Express started")
})