exports.getExpenses = (req, res) => {
    res.send("Get all expenses");
}

exports.postExpense = (req, res) => {
    console.log(req);
    res.send("Expense post endpoint");
}