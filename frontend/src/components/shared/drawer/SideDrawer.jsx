import { Drawer } from "antd";
import { DrawerContex } from "../../../states/DrawerContex";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SideDrawer() {
  const token = localStorage.getItem("vendorToken");
  const navigate = useNavigate();
  const { open, setOpen } = useContext(DrawerContex);
  const onClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("vendorToken");
    navigate("/");
  };
  return (
    <>
      <Drawer
        placement="left"
        onClose={onClose}
        closable={false}
        open={open}
        width={200}
      >
        <div className="mt-5 p-4">
          {token ? (
            <>
              <p className="pt-2 pl-2">Explore</p>
              <p className="pt-2 pl-2" onClick={handleLogout}>
                Login
              </p>
            </>
          ) : (
            <>
              <p className="pt-2">
                <Link to="/register">
                  <button className="border-2 rounded w-28 h-8 px-3 py-0 cursor-pointer bg-[#007cff] text-white">
                    Register
                  </button>
                </Link>
              </p>
              <Link tp="/">
                <p className="pt-2 pl-2">Login</p>
              </Link>
              <p className="pt-2 pl-2">Explore</p>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
}

export default SideDrawer;
