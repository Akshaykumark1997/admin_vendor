const express = require('express');
// const userController = require('../controller/userController');
const serviceController = require('../controller/serviceController');
const vendorController = require('../controller/vendorController');
const validate = require('../middleware/jwtVerification');

const router = express.Router();

router.post('/register', vendorController.signup);
router.post('/login', vendorController.login);
router.post('/addService', validate.verify, serviceController.addService);
router.get('/getServices', validate.verify, serviceController.getServices);
router.get('/vendorDetails', vendorController.getVendor);

module.exports = router;
