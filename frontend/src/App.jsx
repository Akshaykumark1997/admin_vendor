import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./Routes/AdminRoutes";
import  Drawer  from "./states/DrawerContex";

function App() {
  return (
    <>
      <Drawer>
        <Router>
          <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </Router>
      </Drawer>
    </>
  );
}

export default App;
