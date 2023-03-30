import './App.css';
import { BrowserRouter  as Router , Routes, Route } from 'react-router-dom';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/admin/*' element={<AdminRoutes/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
