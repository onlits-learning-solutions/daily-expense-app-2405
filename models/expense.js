const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    id: Number,
    expense_head: String,
});

module.exports = mongoose.model("ExpenseModel", ExpenseSchema);