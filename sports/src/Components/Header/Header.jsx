import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Sports from "../../Pages/Sports/Sports";
import Home from "../../Pages/Home/Index";
import Login from "../../Pages/Login/index";
import NotFound from '../../Pages/NotFound';
import AppRoutes from '../AppRoutes'
import SportsDetail from '../../Pages/Sports/SportsDetail';
import './Header.css';


function Header() {
  return (
    <Router>
    <div className='container'>
    <img className='container-img' src='https://i.pinimg.com/474x/69/ed/be/69edbec372e8f3b818904165b3d6e216.jpg' alt='logo'/> 
    <Link to='/'>
      <button  className='container-button'>Home</button>
    </Link>
    <Link to='/Sports'>
        <button  className='container-button'>Sports</button>
    </Link>
    <Link to='/Login'>
        <button  className='container-button'>Login</button>
    </Link>
</div>
<div>
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Sports' element={<Sports />} />
    <Route path='/Sports/:idUser' element={<SportsDetail />} />
    <Route path='/Login' element={<Login />} />
    <Route element={<AppRoutes />} path="/dashboard" />
    <Route path='*' element={<NotFound />} />
    </Routes>
</div>
</Router>
  )
}

export default Header