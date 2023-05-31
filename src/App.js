// import './App.css';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home'
import "./style.scss";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser}=useContext(AuthContext)
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/"></Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    
    </BrowserRouter>
    //  <Register />
      // <Login />
      // <Home />
  );
}

export default App;
