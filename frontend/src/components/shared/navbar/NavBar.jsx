import React, { useContext } from "react";
import { DrawerContex } from "../../../states/DrawerContex";
import SideDrawer from "../drawer/SideDrawer";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const token = localStorage.getItem("vendorToken");
  const navigate = useNavigate();
  const { showDrawer } = useContext(DrawerContex);
  const handleLogout = () => {
    localStorage.removeItem("vendorToken");
    navigate("/");
  };
  return (
    <nav className="py-3 box-border border-none sticky z-20 top-0 left-0 right-0 bg-white shadow-none">
      <SideDrawer />
      <div className="flex justify-between items-center text-lg font-medium mx-auto px-12 max-w-[1500px]">
        <ul className="flex items-center gap-x-2 sm:hidden">
          <li>
            <img
              src="/image/menu.svg"
              alt=""
              className="sm:hidden w-8 h-4"
              onClick={() => {
                showDrawer();
              }}
            />
          </li>
          <li>
            <img
              src="/image/Colorful.png"
              alt=""
              className="sm:hidden h-8 w-16"
            />
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-x-5">
          <li>
            <img
              src="/image/Colorful.png"
              alt=""
              className="sm:w-20 sm:h-10 w-10 h-8 hidden sm:block"
            />
          </li>
          <li className="text-sm md:text-lg hidden sm:block">Explore</li>
        </ul>
        <ul className="flex justify-between items-center sm:gap-x-10 gap-x-4">
          {token ? (
            <li className="text-sm md:text-lg cursor-pointer">
              <button
                className="border-2 rounded border-black px-3 py-0 w-24 cursor-pointer hover:bg-[#007cff] hover:text-white hover:border-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="text-sm md:text-lg cursor-pointer">
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </li>
              <li className="text-sm md:text-lg hidden sm:block">
                <Link to="/">
                  <button className="border-2 rounded border-black px-3 py-0 w-24 cursor-pointer hover:bg-[#007cff] hover:text-white hover:border-none">
                    Login
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
