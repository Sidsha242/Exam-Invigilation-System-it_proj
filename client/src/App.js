import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Admin from './Pages/Admin';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="dash" element={<Dashboard/>}/>
          <Route path="admin" element={<Admin/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
