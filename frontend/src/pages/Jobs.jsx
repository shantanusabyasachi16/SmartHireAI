import Navbar from '@/components/shared/Navbar'
import React from 'react'
import FilterCards from './FilterCards'


const jobsArray=[1,2,3,4,5,6,7,8];
const Jobs = () => {
  return (
    <div>
        <Navbar/>
        <FilterCards/>
       
     
    </div>
  )
}

export default Jobs