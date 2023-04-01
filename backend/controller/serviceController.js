/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Vendor = require('../model/vendorsSchema');
const validateService = require('../validation/serviceValidation');

module.exports = {
  addService: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(
      token.split(' ')[1],
      process.env.SECRET || 'secret'
    );
    const objId = new mongoose.Types.ObjectId(decoded.id);
    const { errors, isValid } = validateService(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Vendor.findOneAndUpdate(
      { _id: objId },
      {
        $push: {
          services: {
            service: req.body.service,
            price: req.body.price,
          },
        },
      },
      { new: true }
    )
      .then((service) => {
        console.log(service);
        res.json({
          success: true,
          service,
          message: 'Service added successfully',
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          error,
          message: 'something went wrong',
        });
      });
  },
  getServices: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(
      token.split(' ')[1],
      process.env.SECRET || 'secret'
    );
    const objId = new mongoose.Types.ObjectId(decoded.id);
    Vendor.aggregate([
      {
        $match: { _id: objId },
      },
      {
        $project: {
          services: 1,
        },
      },
      {
        $unwind: '$services',
      },
      {
        $project: {
          services: 1,
          _id: 0,
        },
      },
    ])
      .then((services) => {
        res.json({
          success: true,
          services,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          error,
        });
      });
  },
};
