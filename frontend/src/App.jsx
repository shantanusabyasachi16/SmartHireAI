import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"

import Signup from "./components/Login/Signup"
import Home from "./pages/Home"
import Login from "./components/Login/Login"
import Jobs from "./pages/Jobs"
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"
import JobDescription from "./pages/JobDescription"


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
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/explore",
    element:<Explore/>
  },
  {
    path:"/profile",
    element:<Profile/>
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
