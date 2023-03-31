/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const path = require('path');
const Vendor = require('../model/vendorsSchema');
const validateRegister = require('../validation/registerValidation');

module.exports = {
  getVendors: (req, res) => {
    Vendor.find({})
      .then((vendors) => {
        res.json({
          success: true,
          vendors,
        });
      })
      .catch((error) => {
        res.status(404).json({
          message: 'Something went wrong',
          error,
        });
      });
  },
  addVendor: (req, res) => {
    const { image } = req.files;
    const { errors, isValid } = validateRegister(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Vendor.findOne({ email: req.body.email }).then((vendor) => {
      if (vendor) {
        res.status(409).json({
          success: false,
          message: 'Already registerd',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (er, hash) => {
          Vendor.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
            bussinessName: req.body.bussinessName,
          })
            .then((vendorData) => {
              image.mv(
                `${
                  path.join(__dirname, '../public/bussiness_images/') +
                  vendorData._id
                }.jpg`,
                (err) => {
                  if (!err) {
                    res.json({ success: true });
                  } else {
                    res.json({ success: false, err });
                  }
                }
              );
            })
            .catch((error) => {
              res.status(400).json({
                success: false,
                error,
              });
            });
        });
      }
    });
  },
};
