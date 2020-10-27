const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());

mongoose.connect(proccess.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}, () => {console.log("Connected")});

const userRouter = require("./routes/User");
app.use("/user", userRouter);

// const User = require("./model/User");

// const userInput = {
//   username: "qwe",
//   password: "123",
//   role: "admin"
// }

// const user = new User(userInput);
// user.save((err, document) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(document)
// })

app.listen(5000, () => {
  console.log("Express started")
})