/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios/Axios";
import { message } from "antd";
import Validate from "../../shared/login_validation/LoginValidation";

function Login() {
    const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate(formValues);
    if (Object.keys(errors).length !== 0) {
      setError(errors);
    } else {
      axios
        .post("/admin/login", formValues)
        .then((response) => {
          localStorage.setItem("adToken", response.data.token);
          navigate("/admin/dashboard");
        })
        .catch((errors) => {
          setError({ ...error, password: errors.response.data.error });
          if (errors?.response?.data?.message) {
            message.error(errors?.response?.data?.message);
          }
        });
    }
  };
    useEffect(() => {
    const token = localStorage.getItem("adToken");
    if(token) {
      navigate('/admin/dashboard');
    }
  },[])
  return (
    <div className="w-full">
      <div className="py-10 px-5 sm:p-10 max-w-[1500px] mx-auto box-border">
        <div className="flex justify-center px-2 sm:px-4 md:px-2 my-12">
          <div className="w-full xl:w-2/3 lg:w-3/4 flex h-[450px] rounded-lg px-2 shadow-lg border">
            <div
              className="w-full h-auto bg-text hidden md:block md:w-1/3 bg-contain bg-center bg-no-repeat rounded-l-lg bg-white"
              style={{ backgroundImage: `url('/image/admin_login_image.jpg')` }}
            />
            <div className="w-full sm:w-11/12 md:w-3/5 bg-white py-5 px-2 lg:px-5 my-auto rounded-lg lg:rounded-l-none mx-auto">
              <h3 className="pt-4 md:text-2xl text-lg font-bold text-center">
                Hi, Welcome Admin
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formValues.email}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                  {error && (
                    <span className="text-red-600 block">{error.email}</span>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={formValues.password}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
                  />
                  {error && (
                    <span className="text-red-600 block">{error.password}</span>
                  )}
                </div>

                <div className="my-6 text-center">
                  <button
                    type="submit"
                    className="md:w-3/4 w-full h-10 bg-[#007cff] rounded-md text-white"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
