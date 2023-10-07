import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Pages/Home.jsx';
import MainLayout from './Components/Layout/MainLayout';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Privet from './Components/Pages/Privet';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    children: [ 

       {

        path:"/",
        element:<Home></Home>


       },
       {

        path:"/about",
        element:<About></About>

       },
       {

        path:"/services",
        element:<Services></Services>

       },
       {

        path:"/contact",
        element:<Contact></Contact>

       },
       {

        path:"/privet",
        element:<Privet></Privet>

       },
       {

        path:"/login",
        element:<Login></Login>


       },
       {
        path:"/register",
        element:<Register></Register>


       },
      

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
