/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "../../../axios/AdminAxios";
import { Modal, message } from "antd";
import { useNavigate } from "react-router-dom";

function ViewVendors() {
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const showModal = (vendorId) => {
    setSelectedVendor(vendorId);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setSelectedVendor(null);
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setSelectedVendor(null);
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios
      .get("/admin/vendors")
      .then((response) => {
        setVendors(response.data.vendors);
      })
      .catch((error) => {
        if (error.response.data.token) {
          navigate("/admin");
          message.error("Session expired please  login to continue");
        }
      });
  }, []);
  return (
    <div>
      <div className="p-6 sm:text-2xl text-sm font-bold">
        <h1>Vendors</h1>
      </div>
      <div className="md:flex justify-center md:items-center md:px-6 pt-4 px-2 overflow-x-auto">
        <table className="table-fixed border min-w-full">
          <thead className="border-b font-medium">
            <tr className="border-r">
              <th className="border px-6 py-4">Sl.No</th>
              <th className="border px-6 py-4">Name</th>
              <th className="border px-6 py-4">Email</th>
              <th className="border px-6 py-4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((ele, index) => (
              <tr
                className="border-b"
                key={ele._id}
                onClick={() => showModal(ele._id)}
              >
                <th className="border px-6 py-4 font-normal">{index + 1}</th>
                <th className="border px-6 py-4 font-normal">
                  {ele.firstName + ele.lastName}
                </th>
                <th className="border px-6 py-4 font-normal">{ele.email}</th>
                <th className="border px-6 py-4 font-normal">{ele.phone}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedVendor && (
        <Modal
          title="Add Vendor"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          footer={null}
          okButtonProps={{
            style: { background: "#007cff", color: "white" },
          }}
        >
          <div>
            <h1 className="text-xl text-center text-red-600 font-bold">
              Bussiness Details
            </h1>
            <div className="border border-gray-200 sm:m-10 flex justify-around h-28 items-center">
              <h2 className="font-bold">
                Bussiness Name:{" "}
                <span className="font-normal">
                  {
                    vendors.find((vendor) => vendor._id === selectedVendor)
                      .bussinessName
                  }
                </span>
              </h2>
              <img
                src={`http://localhost:8000/bussiness_images/${selectedVendor}.jpg`}
                alt=""
                className="w-32"
              />
            </div>
          </div>
          <div className="overflow-scroll h-48 overflow-x-hidden">
            <h1 className="text-xl text-center text-red-600 font-bold">
              Services
            </h1>
            {vendors
              .find((vendor) => vendor._id === selectedVendor)
              .services.map((ele) => (
                <div className="border border-gray-200 sm:m-10 flex justify-around h-28 items-center">
                  <div key={ele._id}>
                    <h2 className="font-bold">
                      Service:{" "}
                      <span className="font-normal">{ele.service}</span>
                    </h2>
                    <h2 className="font-bold">
                      Price: <span className="font-normal">₹{ele.price}</span>
                    </h2>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleOk}
            >
              OK
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ViewVendors;
