var express = require('express');
var router = express.Router();

const expenseController = require('../controllers/expenseController');
/* GET expenses listing. */
router.get('/', expenseController.getExpenses);

/* POST users listing */
router.post('/', expenseController.postExpense);
module.exports = router;