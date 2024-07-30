import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"

import Signup from "./components/Login/Signup"
import Home from "./pages/Home"
import Login from "./components/Login/Login"

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },

])

function App() {


  return (
    <>
   <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
