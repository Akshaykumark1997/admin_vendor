import React from "react";

function ViewVendors() {
  return (
    <div>
      <div className="p-6 text-2xl font-bold">
        <h1>Vendors</h1>
      </div>
      <div className="flex justify-center items-center px-6 pt-4">
        <table className="table-fixed border min-w-full">
          <thead className="border-b font-medium">
            <tr className="border-r">
              <th className="border px-6 py-4">hi</th>
              <th className="border px-6 py-4">hi</th>
              <th className="border px-6 py-4">hello</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <th className="border px-6 py-4 font-normal">hi</th>
              <th className="border px-6 py-4 font-normal">hi</th>
              <th className="border px-6 py-4 font-normal">hello</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewVendors;
