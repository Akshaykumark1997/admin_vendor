import React, { useEffect, useState } from "react";
import axios from "../../../axios/Axios";

function ViewVendors() {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    axios.get("/admin/vendors").then((response) => {
      setVendors(response.data.vendors);
    });
  }, []);
  return (
    <div>
      <div className="p-6 sm:text-2xl text-sm font-bold">
        <h1>Vendors</h1>
      </div>
      <div className="md:flex justify-center md:items-center md:px-6 pt-4 px-2 overflow-x-auto">
        <table className="table-fixed border min-w-full">
          <thead className="border-b font-medium">
            <tr className="border-r">
              <th className="border px-6 py-4">Sl.No</th>
              <th className="border px-6 py-4">Name</th>
              <th className="border px-6 py-4">Email</th>
              <th className="border px-6 py-4">Phone</th>
            </tr>
          </thead>
          <tbody>
              {vendors.map((ele, index) => (
            <tr className="border-b" key={ele._id}>
                  <th className="border px-6 py-4 font-normal" >
                    {index + 1}
                  </th>
                  <th className="border px-6 py-4 font-normal">{ele.firstName + ele.lastName}</th>
                  <th className="border px-6 py-4 font-normal">
                    {ele.email}
                  </th>
                  <th className="border px-6 py-4 font-normal">{ele.phone}</th>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewVendors;
