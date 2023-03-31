const express = require('express');
const adminController = require('../controller/adminController');
const vendorController = require('../controller/vendorController');

const router = express.Router();

router.post('/login', adminController.login);
router.get('/vendors', vendorController.getVendors);
router.post('/addVendor', vendorController.addVendor);

module.exports = router;
