const express = require('express');
const adminController = require('../controller/adminController');
const vendorController = require('../controller/vendorController');
const validate = require('../middleware/jwtVerification');

const router = express.Router();

router.post('/login', adminController.login);
router.get('/vendors', validate.verify, vendorController.getVendors);
router.post('/addVendor', validate.verify, vendorController.signup);

module.exports = router;
