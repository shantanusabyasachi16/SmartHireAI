import Navbar from '@/components/shared/Navbar'
import React from 'react'
import Jobsss from './Jobsss';

const randomJobs=[1,2,3,];

const Explore = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-xl my-10'> Search Results({randomJobs.length})</h1>
            <div className='grid grid-cols-3 map-4 '>
            {
                randomJobs.map((item, index)=>{
                    return(
                        <Jobsss/>
                    )
                })
            }
            </div>
            
        </div>
    </div>
  )
}

export default Explore