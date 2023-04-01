import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginVendors from "../pages/vendors/vendor_login/LoginVendors";
import VendorRegistration from "../pages/vendors/vendor_registration/VendorRegistration";
import VendorHome from "../pages/vendors/vendor_home/VendorHome";
import VendorAuthorization from "../authorization/VendorAuthorization";

function VendorRoutes() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<LoginVendors />} />
          <Route path="/register" element={<VendorRegistration />} />
        <Route element={<VendorAuthorization />}>
          <Route path="/home" element={<VendorHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default VendorRoutes;
