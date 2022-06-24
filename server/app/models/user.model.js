const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    budget: Number,
    balance: Number,
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
      }
    ]
  })
);

module.exports = User;

// const mongoose = require("mongoose");
// const postSchema = require("./transaction.model").schema; //or wherever post.js is

// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   firstName: String,
//   lastName: String,
//   budget: Number,
//   balance: Number,
//   transactions: [postSchema]
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;