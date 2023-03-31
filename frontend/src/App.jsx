import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./Routes/AdminRoutes";
import  Drawer  from "./states/DrawerContex";
import VendorRoutes from "./Routes/VendorRoutes";

function App() {
  return (
    <>
      <Drawer>
        <Router>
          <Routes>
            <Route path="/*" element={<VendorRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </Router>
      </Drawer>
    </>
  );
}

export default App;
