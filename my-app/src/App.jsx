import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/layout/Layout'
import Log from './components/pages/log/log'
import Reagister from './components/pages/log/register'
import ErrorFile from './components/pages/log/errorFile'
import Contact from './components/pages/contact/contact'
import About from './components/pages/about/about'
import Category from './components/pages/category/Category'
import Home from './components/pages/home/Home'
import Info from './components/pages/info/Info'
import CheckOut from './components/pages/checkOut/checkOut'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <Log />,
          index: true,
          path: "/"
        },
        { path: '/register', element: <Reagister /> },
        { path: '/contact', element: <Contact /> },
        { path: "/log", element: <Log /> },
        { path: "/about", element: <About />},
        { path: '/category', element: <Category />},
        { path: '/home', element: <Home />},
        { path: "/info", element: <Info />},
        { path: "/checkOut", element: <CheckOut />}
      ]
    }
  ])


  return <RouterProvider router={router} />
}

export default App
