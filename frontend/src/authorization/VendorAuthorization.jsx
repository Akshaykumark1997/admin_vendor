import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function VendorAuthorization() {
  const userToken = localStorage.getItem("vendorToken");
  return userToken ? <Outlet /> : <Navigate to="/" />;
}

export default VendorAuthorization;