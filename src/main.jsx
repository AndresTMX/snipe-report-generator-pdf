import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import {Login} from '../src/pages/Login';
import {PageHome} from '../src/pages/home/';


const router = createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/',
    element:<App><PageHome/></App>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
       <RouterProvider router={router} />
  </React.StrictMode>,
)
