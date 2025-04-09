var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
/* GET users listing. */
router.get('/', userController.getUsers);
router.get('/:email', userController.getUser);

/* POST users listing */
router.post('/', userController.postUser);
router.post('/authenticate', userController.authenticate);

module.exports = router;
