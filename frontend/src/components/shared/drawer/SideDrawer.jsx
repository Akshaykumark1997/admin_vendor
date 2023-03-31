import { Drawer } from "antd";
import { DrawerContex } from "../../../states/DrawerContex";
import React, { useContext } from "react";

function SideDrawer() {
  const { open, setOpen } = useContext(DrawerContex);
  const onClose = () => {
    setOpen(false);
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
          <p className="pt-2"><button className="border-2 rounded border-black px-3 py-0 cursor-pointer">Register</button></p>
          <p className="pt-2 pl-2">Join</p>
          <p className="pt-2 pl-2">Explore</p>
        </div>
      </Drawer>
    </>
  );
}

export default SideDrawer;
