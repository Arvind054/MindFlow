import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CreateFlow from './components/CreateFlow';
import MyFlows from './components/MyFlows';
import About from './components/About';
import Login from './components/Login';
import ViewMindMap from './components/ViewMindMap'
import PageNotFound from './components/PageNotFound';
import './App.css'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><HomePage></HomePage></>

    },{
      path:"/flow/edit/:id",
      element: <><Navbar/> <CreateFlow/>  </>  
    },{
      path: "/myFlows",
      element:<><Navbar/><MyFlows/></>
    },{
      path: "/about",
      element:<><Navbar/><About/></>
    },{
      path:"/login",
      element: <><Navbar/><Login/></>
    },{
      path:"/flow/view/:id",
      element: <><Navbar/><ViewMindMap/></>
    },{
      path: "*",
      element: <><Navbar/><PageNotFound/></>
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
