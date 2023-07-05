import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigator } from "./sections/Navigator/";
import { DataProvider } from "./Context/DocContext";
import { Banner } from "./sections/Banner";
import {Login} from '../src/pages/Login';
import {PageHome} from '../src/pages/home/';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <DataProvider> 
        <Banner />
        <Navigator />
        <PageHome />
      </DataProvider>
    ),
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <RouterProvider router={router} />;    
  </React.StrictMode>,
)
