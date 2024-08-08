import {  createBrowserRouter, RouterProvider } from "react-router-dom"


import Signup from "./components/Login/Signup"
import Home from "./pages/Home"
import Login from "./components/Login/Login"
import Jobs from "./pages/Jobs"
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"
import JobDescription from "./pages/JobDescription"
import Companies from "./adminPages/Companies"
import CreateCompany from "./adminPages/CreateCompany"
import CompanySetup from "./adminPages/CompanySetup"
import AdminJobs from "./adminPages/Adminjobs"


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
  //for admin routes
  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CreateCompany/>
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },
   {
    path:"/admin/jobs",
    element:<AdminJobs/>
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
