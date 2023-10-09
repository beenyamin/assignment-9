import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Pages/Home.jsx';
import MainLayout from './Components/Layout/MainLayout';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import ErrorPage from './Components/Pages/ErrorPage';
import AuthProvider from './Components/Provider/AuthProvider/AuthProvider';
import Details from './Components/Pages/Details';
import PrivateRoute from './Routes/PrivateRoute';
import DetailsPage from './Components/DetailsPage/DetailsPage';



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    errorElement:<ErrorPage></ErrorPage>,
    children: [ 

       {

        path:"/",
        element:<Home></Home>,
        loader:() => fetch ('/Wedding.json')



       },
       {

        path:"/about",
        element:<About></About>

       },
       {

        path:"/services",
        element:<PrivateRoute><Services></Services></PrivateRoute>

       },
       {

        path:"/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>

       },
       {

        path:"/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:() => fetch ('/Wedding.json')
         
       },

       { 

        path :"/detailsPage",
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>

       
  


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

   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
