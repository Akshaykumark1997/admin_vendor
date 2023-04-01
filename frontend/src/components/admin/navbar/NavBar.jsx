import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("tokenAdmin");
    navigate("/admin");
  }
  return (
    <>
      <div className="flex">
        <div className="bg-dark-purple min-h-screen p-5 h-[940px]  pt-8 md:w-72 w-24 ">
          <div className="md:pl-6 pl-2 md:text-2xl text-lg text-white">
            <h1>Admin</h1>
          </div>
          <ul className="pt-12">
          <Link to="/admin/dashboard"><li className="flex rounded-md p-4 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center">
              <img src="/image/Chart.png" alt="text" className="hover:bg-light-white" />
              <span className="hidden md:block px-2">Dashboard</span>
            </li></Link>
           <Link to="/admin/addVendor"><li className="flex rounded-md p-4 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center">
              <img src="/image/folder.png" alt="text" className="hover:bg-light-white" />
              <span className="hidden md:block px-2">Add Vendors</span>
            </li></Link>
          </ul>
          <ul className="pt-12">
            <li className="flex rounded-md p-4 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center">
              <img
                src="/image/logout.svg"
                alt="text"
                className="hover:bg-light-white w-6"
              />
              <span className="hidden md:block px-2" onClick={handleLogout}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
