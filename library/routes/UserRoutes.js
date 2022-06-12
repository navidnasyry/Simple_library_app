const express = require('express');
const router = express.Router();


//Controllers
const userController = require('../controller/user');


//Routes

router.post('/register', userController.register);
router.post('/login', userController.login);


module.exports = router;