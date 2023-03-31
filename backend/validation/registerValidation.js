/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : '';
  data.bussinessName = !isEmpty(data.bussinessName) ? data.bussinessName : '';

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'First Name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name field is required';
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'Last Name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last Name field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'phone is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must have 6 chars';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.bussinessName, { min: 2, max: 30 })) {
    errors.bussinessName = 'Bussiness Name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.bussinessName)) {
    errors.bussinessName = 'Bussiness Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
