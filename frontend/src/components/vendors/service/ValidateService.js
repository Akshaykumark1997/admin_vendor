const validate = (values) => {
  const errors = {};
  if (values.service.trim() === "") {
    errors.service = "Service is required";
  }
  if (values.price.trim() === "") {
    errors.price = "Price is required";
  } else if (!/^\d+(\.\d{1,2})?$/.test(values.price)) {
    errors.price = "Enter valid price";
  }
  return errors;
};

export default validate;
