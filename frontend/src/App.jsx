import { Outlet,Navigate,Route,Routes,useLocations} from "react-router-dom"

import { Footer, Navbar } from "./componentss"
import { Router } from "express";

function Layout()
{
  const user= true;
  const locations= useLocations()
  return user ?<Outlet/> : <Navigate to='user-auth ' state={{from: locations}}/>
}
function App() {
  return (
  <main>
 <Navbar/>
<Routes>

<Route element={<Layout/>}>

<Route path="/"element={<Navigate to='/find-jobs' replace={true}/>}/>

<Route path="/find-jobs" element={<Findjobs/>}/>
<Route path="/Companies" element={<Companies/>}/>

<Route
 path={
  user?.user?.accountType==="seeker"
  ?"/user-profile"
  :"/user-profile/:id"

 } element ={<USerProfile/>}
/>

<Route path={"/company-profile"} element={<CompanyProfile/>}/>
<Route path={"/company-profile/:id"} element={<CompanyProfile/>}/>
<Route path={"/upload-job"} element={<Uploadjob/>}/>
<Route path={"/job-detail/:id"} element={<JobDetail/>}/>

</Route>

<Route path="/about-us" element={<About/>}/>
<Route path="/user-auth" element={<Authpage/>}/>

</Routes>


{/*if user is login it should show the footer*/}
 {user && <Footer/>}

  </main>
  )
}

export default App
