import React from "react";

function ViewVendors() {
  return (
    <div>
      <div className="p-6 text-2xl font-bold">
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
            <tr className="border-b">
              <th className="border px-6 py-4 font-normal">1</th>
              <th className="border px-6 py-4 font-normal">AkshayKumarK</th>
              <th className="border px-6 py-4 font-normal">akshayajith05@gmail.com</th>
              <th className="border px-6 py-4 font-normal">9744549400</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewVendors;
