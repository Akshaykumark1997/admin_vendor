import React from "react";
import NavBar from "../../../components/admin/navbar/NavBar";
import ViewVendors from "../../../components/admin/view_vendors/ViewVendors";

function Dashboard() {
  return (
    <div>
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="w-full">
          <ViewVendors />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
