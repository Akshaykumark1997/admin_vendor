import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function AdminAuthorization() {
  const userToken = localStorage.getItem("adminToken");
  return userToken ? <Outlet /> : <Navigate to="/admin" />;
}

export default AdminAuthorization;