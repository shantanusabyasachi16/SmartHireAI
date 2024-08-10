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
import PostNewJob from "./adminPages/PostNewJob"
import Applicants from "./adminPages/Applicants"
import ProtectedRoute from "./adminPages/Protected Route"


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
    element:<ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element:<ProtectedRoute><CreateCompany/></ProtectedRoute>
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
  },
   {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute>
  },
   {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostNewJob/></ProtectedRoute>
  },
   {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute>
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
