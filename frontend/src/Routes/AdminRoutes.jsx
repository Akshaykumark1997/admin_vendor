import React from "react";
import { Routes, Route } from "react-router-dom";
import Vendors from "../pages/admin/add_vendors/Vendors";
import AdminLogin from "../pages/admin/admin_login/AdminLogin";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AdminAuthorization from "../authorization/AdminAuthorization";

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route element={<AdminAuthorization />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addVendor" element={<Vendors />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AdminRoutes;
