import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CreateFlow from './components/CreateFlow';
import './App.css'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><HomePage></HomePage></>

    },{
      path:"/flow/:id",
      element: <><Navbar/> <CreateFlow/>  </>  
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
