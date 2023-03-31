import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validate from "../../shared/register_validation/RegisterValidation";

function Registration() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    bussinessName: "",
    image: null,
  });
  const [error, setError] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.files[0],
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate(formValues);
    if (Object.keys(errors).length !== 0) {
      setError(errors);
      console.log(error);
    } else {
    }
  };
  return (
    <div className="w-full">
      <div className="py-10 px-5 sm:p-10 max-w-[1500px] mx-auto box-border">
        <div className="flex justify-center px-2 sm:px-4 md:px-2 my-12">
          <div className="w-full xl:w-2/3 lg:w-3/4 flex h-[900px] rounded-lg px-2 shadow-lg border">
            <div
              className="w-full h-auto bg-text hidden md:block md:w-1/3 bg-contain bg-center bg-no-repeat rounded-l-lg bg-white"
              style={{ backgroundImage: `url('/image/registration.jpg')` }}
            />
            <div className="w-full sm:w-11/12 md:w-3/5 bg-white py-5 px-2 lg:px-5 my-auto rounded-lg lg:rounded-l-none mx-auto">
              <h3 className="pt-4 md:text-2xl text-lg font-bold text-center">
                Hi, Welcome back
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 ">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formValues.firstName}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                  <span className="block text-red-600">{error.firstName}</span>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formValues.lastName}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                <span className="text-red-600 block">{error.lastName}</span>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formValues.email}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                <span className="text-red-600 block">{error.email}</span>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    onChange={handleChange}
                    value={formValues.phone}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                <span className="text-red-600 block">{error.phone}</span>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={formValues.password}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                <span className="text-red-600 block">{error.password}</span>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Bussiness Name"
                    name="bussinessName"
                    onChange={handleChange}
                    value={formValues.bussinessName}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                <span className="text-red-600 block">{error.bussinessName}</span>
                </div>
                <div className="mb-4 pt-3 text-center mr-2">
                  <label
                    htmlFor="logo"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <input
                      type="file"
                      id="logo"
                      name="image"
                      onChange={handleFileChange}
                      className="hidden px-3 pt-1 text-grey-700 border-2 border-solid rounded border-gray-300 focus:border-red-600 focus:outline-none md:w-3/4 w-full h-10 "
                    />
                    Choose image
                  </label>
                </div>
                  <span className="text-red-600">{error.image}</span>

                <div className="my-6 text-center">
                  <button
                    type="submit"
                    className="md:w-3/4 w-full h-10 bg-[#007cff] rounded-md text-white"
                  >
                    submit
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>
                  Already have Account?
                  <Link to="/">
                    <span className="text-red-700 font-bold font-sans">
                      {" "}
                      LogIn
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
