/* eslint-disable consistent-return */
const Service = require('../model/serviceSchema');
const validateService = require('../validation/serviceValidation');

module.exports = {
  addService: (req, res) => {
    const { errors, isValid } = validateService(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Service.create({
      service: req.body.service,
      price: req.body.price,
    })
      .then(() => {
        res.json({
          success: true,
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
};
