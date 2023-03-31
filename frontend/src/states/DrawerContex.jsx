import { createContext, useState } from "react";

export const DrawerContex = createContext({});

function Drawer({ children }) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <DrawerContex.Provider value={{ open, setOpen, showDrawer }}>
      {children}
    </DrawerContex.Provider>
  );
}

export default Drawer;
