const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const serviceSchema = new Schema({
  service: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  userId: {
    type: ObjectId,
    required: true,
  },
});

const service = mongoose.model('services', serviceSchema);
module.exports = service;
