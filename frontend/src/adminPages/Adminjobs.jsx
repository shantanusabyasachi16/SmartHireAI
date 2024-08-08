import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import AdminJobTable from './AdminJobTable'
import useGetallAdminJobs from '@/hooks/useGetallAdminJobs'
import { setsearchJobByText } from '@/redux/jobSlice'

const Adminjobs = () => {
  useGetallAdminJobs()
  const [input,setinput]  = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(()=>{
 dispatch(setsearchJobByText(input));
  },[input])
  return (
    
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
          className="w-fit"
          placeholder = "filter by name , role"
          onChange={(e)=>setinput(e.target.value)}
          />
          <Button onClick={()=>navigate("/admin/jobs/create")}>Post New Jobs</Button>
        </div>
        <AdminJobTable/>``

      </div>
      </div>
  )
}

export default Adminjobs