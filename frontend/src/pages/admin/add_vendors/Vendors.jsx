import React from "react";
import AddVendor from "../../../components/admin/add_vendors/AddVendor";
import NavBar from "../../../components/admin/navbar/NavBar";

function Vendors() {
  return (
    <div>
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="w-full">
          <AddVendor />
        </div>
      </div>
    </div>
  );
}

export default Vendors;
