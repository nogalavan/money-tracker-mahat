const mongoose = require("mongoose");

const Transaction = mongoose.model(
  "Transaction",
  new mongoose.Schema({
    amount: Number,
    date: String,
    discription: String,
    catagory: String,
    type: String,
  })
);

module.exports = Transaction;

// const mongoose = require("mongoose");

// const transactionSchema = new mongoose.Schema({
//   amount: Number,
//   date: String,
//   discription: String,
//   catagory: String,
//   type: String,  
// });

// const Transaction = mongoose.model("Transaction", transactionSchema);

// module.exports = Transaction;