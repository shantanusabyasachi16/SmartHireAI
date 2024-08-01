import React from 'react'
import LatestJobCard from './LatestJobCard'
const random =[1,2,3,4,5,6,7,8,9,10 ,11,12]
const Latestjobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-25'>
      <h1 className=' text-4xl font-bold'><span className='text-[#591887]'>Latest & Top</span> JOB OPENINGS</h1>
   <div className='grid grid-cols-3 gap-4 my-5'>
   {
      random.slice(0,6).map((item,index)=><LatestJobCard/>)
    }
   </div>
   
    </div>
  )
}

export default Latestjobs