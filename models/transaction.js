// requiring dependencies
const mongoose = require("mongoose");

// Defining schema
const Schema = mongoose.Schema;

// New instance of mongoose transaction document
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

// Setting up document as a model to be used throughout application
const Transaction = mongoose.model("Transaction", transactionSchema);

// exporting model to be used in other parts of the application
module.exports = Transaction;
