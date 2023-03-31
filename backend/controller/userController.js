/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
  login: (req, res) => {
    console.log(req.body);
    User.findOne({ email: req.body.email }).then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found please register to continue',
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: user._id,
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
