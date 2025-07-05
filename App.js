import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import MyOrder from './screens/MyOrder';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// ✅ Correct Cart context wrapper (not Cart screen)
import { Cart } from './components/ContextReducer';

function App() {
  return (
    <Cart>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path="/myOrder" element={<MyOrder />} />
        </Routes>
      </Router>
    </Cart>
  );
}

export default App;
