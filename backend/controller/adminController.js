/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Admin = require('../model/adminSchema');

dotenv.config();

module.exports = {
  login: (req, res) => {
    console.log(req.body);
    Admin.findOne({ email: req.body.email }).then((admin) => {
      if (!admin) {
        return res.status(404).json({
          success: false,
          error: 'Incorrect Email or password',
        });
      }
      bcrypt
        .compare(req.body.password, admin.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: admin._id,
            };
            jwt.sign(
              payload,
              process.env.SECRET || 'secret',
              {
                expiresIn: 36000,
              },
              (err, token) => {
                if (err) {
                  res.status(400).json({
                    success: false,
                    message: 'something went wrong',
                  });
                } else {
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
              error: 'Incorrect Email or Password',
            });
          }
        })
        .catch((errors) => {
          res.status(401).json({
            success: false,
            errors,
            error: 'Incorrect Email or Password',
          });
        });
    });
  },
};
