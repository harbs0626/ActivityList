let express = require('express');
let router = express.Router();

let userController = require('../controllers/user');

router.post('/register', userController.processRegister);

module.exports = router;
