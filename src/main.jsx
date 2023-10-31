import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/HomePage/Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import AuthProviders from './Providers/AuthProviders';
import Checkout from './Routes/Checkout';
import BookService from './Routes/BookService';
import Bookings from './Routes/Bookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/book/:id',
        element: <BookService></BookService>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: `/checkout/:id`,
        element: <Checkout></Checkout>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'bookings', 
        element: <Bookings></Bookings>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
