import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginVendors from '../pages/vendors/vendor_login/LoginVendors';


function VendorRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginVendors />} />
        </Routes>
    </div>
  )
}

export default VendorRoutes