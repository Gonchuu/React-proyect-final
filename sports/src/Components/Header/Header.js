import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Sports from "../../Pages/Sports/sports";
import Home from "../../Pages/Home/index";
import Login from "../../Pages/Login/index";
import NotFound from '../../Pages/NotFound';
import AppRoutes from '../AppRoutes'

function Header() {
  return (
    <Router>
    <div className='container'>
    <Link to='/'>
        <button  className='button'>Home</button>
    </Link>
    <Link to='/Sports'>
        <button  className='button'>Sports</button>
    </Link>
    <Link to='/Login'>
        <button  className='button'>Login</button>
    </Link>
</div>
<div>
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Sports' element={<Sports />} />
    <Route path='/Login' element={<Login />} />
    <Route element={<AppRoutes />} path="/dashboard" />
    <Route path='*' element={<NotFound />} />
    </Routes>
</div>
</Router>
  )
}

export default Header