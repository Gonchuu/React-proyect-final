import React from "react";
import Login from "../Pages/Login";
// import Dashboard from '../Pages/Dashboard';
import PageNotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Sports from "../Pages/Sports/sports"

const routes = [
{
    path: "/",
    element: <Home />,
},
{
    path: "/Sports",
    element: <Sports />
},
{
    path: "/Login",
    element: <Login />
},
/* {
    path: "/dashboard",
    element: <Dashboard />,
    isPrivate: true
  }, */
{
    path: "/*",
    element: <PageNotFound />,
},
];

export default routes;