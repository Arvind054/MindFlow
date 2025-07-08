import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import CreateFlow from './Pages/CreateFlow'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:"/create",
      element: <CreateFlow/>
    }
  ])
  return (
    <>
    <Navbar></Navbar>
     <RouterProvider router={router}></RouterProvider>
     </>
  )
}

export default App