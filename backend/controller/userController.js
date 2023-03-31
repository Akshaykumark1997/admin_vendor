/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const path = require('path');
const validateRegister = require('../validation/registerValidation');
const User = require('../model/userSchema');

module.exports = {
  signUp: (req, res) => {
    const { image } = req.files;
    const { errors, isValid } = validateRegister(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        res.status(409).json({
          success: false,
          message: 'Already registerd',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (hash) => {
          User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
            bussinessName: req.body.bussinessName,
          })
            .then((userData) => {
              image.mv(
                path.join(__dirname, '../public/bussiness_images/') +
                  userData._id +
                  '.jpg',
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
