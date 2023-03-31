const Vendors = require('../model/vendorsSchema');

module.exports = {
  getVendors: (req, res) => {
    Vendors.find({})
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
};
