import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from '../pages/admin/dashboard/Dashboard';

function AdminRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}  />
        </Routes>

    </div>
  )
}

export default AdminRoutes