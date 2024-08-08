import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompnaies from '@/hooks/useGetAllCompnaies'
import { useDispatch } from 'react-redux'
import { setsearchCompanyByText } from '@/redux/company.Slice'

const Companies = () => {
  useGetAllCompnaies()
  const [input,setinput]  = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(()=>{
 dispatch(setsearchCompanyByText(input));
  },[input])
  return (
    
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
          className="w-fit"
          placeholder = "filter by name"
          onChange={(e)=>setinput(e.target.value)}
          />
          <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable/>

      </div>
      </div>
  )
}

export default Companies