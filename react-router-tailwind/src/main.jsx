import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home/Home';
import About_us from './Component/About us/About_us.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Users from './Component/Users/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About_us></About_us>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()), 
        element:<Users></Users>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
