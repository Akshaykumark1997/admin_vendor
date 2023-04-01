/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  data.service = !isEmpty(data.service) ? data.service : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (!Validator.isLength(data.service, { min: 2, max: 30 })) {
    errors.service = 'Service must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.service)) {
    errors.service = 'Service field is required';
  }
  if (Validator.isEmpty(data.price)) {
    errors.price = 'Service field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
