/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
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
  signup: (req, res) => {
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
  login: (req, res) => {
    Vendor.findOne({ email: req.body.email }).then((vendor) => {
      if (!vendor) {
        return res.status(404).json({
          success: false,
          message: 'User not found please register to continue',
        });
      }
      bcrypt
        .compare(req.body.password, vendor.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: vendor._id,
            };
            jwt.sign(
              payload,
              process.env.SECRET || 'secret',
              {
                expiresIn: 36000,
              },
              (err, token) => {
                if (err) console.error('There is some error in token', err);
                else {
                  res.json({
                    success: true,
                    token: `Bearer ${token}`,
                  });
                }
              }
            );
          } else {
            res.status(401).json({
              success: false,
              error: 'Incorrect Password',
            });
          }
        })
        .catch((errors) => {
          res.status(401).json({
            success: false,
            errors,
            error: 'Incorrect Password',
          });
        });
    });
  },
};
