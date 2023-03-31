const validate = (values) => {
  const errors = {};
  if (values.email.trim() === "") {
    errors.email = "Email is required";
  } 
  if (values.password.trim() === "") {
    errors.password = "Password is required";
  } 
  return errors;
};

export default validate;
