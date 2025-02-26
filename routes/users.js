var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
/* GET users listing. */
router.get('/', userController.getUsers);

/* POST users listing */
router.post('/', userController.postUser);

module.exports = router;
