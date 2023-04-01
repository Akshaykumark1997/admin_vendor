const express = require('express');
// const userController = require('../controller/userController');
const serviceController = require('../controller/serviceController');
const vendorController = require('../controller/vendorController');

const router = express.Router();

router.post('/register', vendorController.signup);
router.post('/login', vendorController.login);
router.post('/addService', serviceController.addService);
router.get('/getServices', serviceController.getServices);
// router.get('/vendor', userController.getvendor);

module.exports = router;
