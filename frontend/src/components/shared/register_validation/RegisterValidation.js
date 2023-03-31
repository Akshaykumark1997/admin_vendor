const validate = (values) => {
  const errors = {};
  const fileType = values?.image?.type;
  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
  if (values.firstName.trim() === "") {
    errors.firstName = "First name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.firstName)) {
    errors.firstName = "First name should only contain alphabets and space";
  }
  if (values.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.lastName)) {
    errors.lastName = "Last name should only contain alphabets and space";
  }
  if (values.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email";
  }
  if (values.phone.trim() === "") {
    errors.phone = "Phone number is required";
  } else if (!/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number";
  }
  if (values.password.trim() === "") {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)
  ) {
    errors.password = "Password should be 8 and one digit and one special char";
  }
  if (values.bussinessName.trim() === "") {
    errors.bussinessName = "bussiness name is required";
  } else if (!/^[a-zA-Z0-9\s&.'-]{2,100}$/.test(values.bussinessName)) {
    errors.bussinessName = "bussiness name should be valid";
  }
  if (values.image === null) {
    errors.image = "image is required";
  } else if (!validImageTypes.includes(fileType)) {
    errors.image = "upload an image";
  }
  return errors;
};

export default validate;
