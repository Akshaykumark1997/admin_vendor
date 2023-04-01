/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";
import Validate from "./ValidateService";
import axios from "../../../axios/Axios";
import { useNavigate } from "react-router-dom";

function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    service: "",
    price: "",
  });
  const [error, setError] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (event) => {
    event.preventDefault();
    const errors = Validate(formValues);
    if (Object.keys(errors).length !== 0) {
      setError(errors);
      console.log(errors);
      if (error?.service) {
        message.error(error?.service);
      }
      if (error?.price) {
        message.error(error?.price);
      }
    } else {
      axios
        .post("/addService", formValues)
        .then((response) => {
          message.success(response.data.message);
          setFormValues({ ...formValues, service: "", price: "" });
          setIsModalOpen(false);
        })
        .catch((error) => {
          message.error(error?.response?.data?.message);
          if (!error.response.data.token) {
            navigate("/admin");
            message.error("Session expired please  login to continue");
          }
        });
    }
  };
  useEffect(() => {
    axios
      .get("/getServices")
      .then((response) => {
        setServices(response.data.services);
      })
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/admin");
          message.error("Session expired please  login to continue");
        }
      });
  }, []);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mx-auto sm:w-[50%] md:w-[50%] lg:w-[50%] w-72">
      <div className="flex justify-end m-10">
        {services.length !== 0 && (
          <button
            className="md:w-32 md:h-10 w-28 h-8 border border-gray-400 rounded bg-green-500 text-white"
            onClick={showModal}
          >
            Add Service
          </button>
        )}

        <Modal
          title="Add Vendor"
          centered
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          okButtonProps={{ style: { background: "#007cff", color: "white" } }}
        >
          <div className="flex justify-center flex-col w-full  items-center">
            <input
              type="text"
              placeholder="Service"
              name="service"
              onChange={handleChange}
              value={formValues.email}
              className="form-control block mt-2  px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
            />
            {error && <span className="text-red-600 block">{error.email}</span>}
            <input
              type="text"
              placeholder="Price"
              name="price"
              onChange={handleChange}
              value={formValues.email}
              className="form-control block mt-2  px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-2 border-solid  rounded transition ease-in-out m-0 border-gray-300 focus:text-gray-700  focus:border-red-600 focus:outline-none h-12"
            />
            {error && <span className="text-red-600 block">{error.email}</span>}
          </div>
        </Modal>
      </div>
      {services.length !== 0 &&
        services.map((ele) => (
          <div
            className="border border-gray-200 sm:m-10 m-4 flex justify-around h-28 items-center"
            key={ele.services._id}
          >
            <h2 className="font-bold text-xs md:text-lg">
              Service:{" "}
              <span className="font-normal text-xs md:text-lg">
                {ele.services.service}
              </span>
            </h2>
            <h2 className="font-bold">
              Price:{" "}
              <span className="font-normal text-xs md:text-lg">
                ₹{ele.services.price}
              </span>
            </h2>
          </div>
        ))}
      {services.length === 0 && (
        <div className="border border-gray-200 sm:m-10 flex justify-around h-28 items-center">
          <h1>No Services added Please add new services</h1>
          <button
            className="md:w-32 md:h-10 w-28 h-8 border border-gray-400 rounded bg-green-500 text-white"
            onClick={showModal}
          >
            Add Service
          </button>
        </div>
      )}
    </div>
  );
}

export default Service;
