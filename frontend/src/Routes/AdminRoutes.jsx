import React from 'react';
import { Routes, Route } from "react-router-dom";
import AdminLogin from '../pages/admin/admin_login/AdminLogin';
import Dashboard from '../pages/admin/dashboard/Dashboard';

function AdminRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AdminLogin />} />
            <Route path='/dashboard' element={<Dashboard/>}  />
        </Routes>

    </div>
  )
}

export default AdminRoutes