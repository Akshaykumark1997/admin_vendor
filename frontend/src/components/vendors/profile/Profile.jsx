/* eslint-disable react-hooks/exhaustive-deps */
import axios from "../../../axios/Axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Profile() {
  const [vendor, setVendor] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/vendorDetails")
      .then((response) => {
        setVendor(response.data.vendor);
      })
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/");
          message.error("Session expired please  login to continue");
        }
      });
  }, []);
  return (
    <div className="max-w-[1400px] py-24 mx-auto px-5 sm:px-20 ">
      <div className="flex justify-between flex-col items-center md:flex-row">
        <div className="w-full md:w-[65%] min-[875px]:w-[85%]">
          <h1>Hi, Akshay</h1>
          <hr />
          <div className="bg-slate-100  shadow-sm rounded-sm border-black my-10 ">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 p-4">
              <span className="text-gray-500">
                <svg
                  className="h-5"
                  xmlns="/image/user.png"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700 p-4">
              <div className="grid lg:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  <div className="px-4 py-2 text-xs sm:text-sm">
                    {vendor.firstName}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  <div className="px-4 py-2 text-xs sm:text-sm">
                    {vendor.lastName}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2 text-xs sm:text-sm break-words">
                    {vendor.email}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2 text-xs sm:text-sm">
                    {vendor.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 md:mt-3 md:w-[25%] min-[765px]:w-[85%] md:py-16">
          <div>
            <div className="flex flex-col text-center items-center">
              <img
                src={`http://localhost:8000/bussiness_images/${vendor._id}.jpg`}
                alt=""
                className="md:w-full lg:w-48 min-[760px]:w-88"
              />
              <h6>{vendor.bussinessName}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
