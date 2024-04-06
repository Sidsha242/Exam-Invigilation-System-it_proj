import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Admin from './Pages/Admin';

import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Navbar';
import Logout from './Pages/Logout';
import MyExams from './Pages/MyExams';



function App() {
  return (
    <BrowserRouter>
    <Toaster/>
    <Navbar/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="dash" element={<Dashboard/>}/>
          <Route path="admin" element={<Admin/>}/>
          <Route path="logout" element={<Logout/>}/>
          <Route path="myexams" element={<MyExams/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
