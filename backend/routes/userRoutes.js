const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/register', userController.signUp);

module.exports = router;
