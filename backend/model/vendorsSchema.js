const mongoose = require('mongoose');

const { Schema } = mongoose;

const vendorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bussinessName: {
    type: String,
    required: true,
  },
});

const vendor = mongoose.model('vendors', vendorSchema);
module.exports = vendor;
