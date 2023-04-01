const express = require('express');
const userController = require('../controller/userController');
const serviceController = require('../controller/serviceController');

const router = express.Router();

router.post('/register', userController.signUp);
router.post('/login', userController.login);
router.post('/addService', serviceController.addService);
router.get('/getServices', serviceController.getServices);

module.exports = router;
