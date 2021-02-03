let express = require('express');
let router = express.Router();

let userController = require('../controllers/user');

router.post('/login', userController.processLogin);

router.post('/register', userController.processRegister);

router.post('/logout', userController.processLogout);

module.exports = router;
