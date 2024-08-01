import { Badge } from '@/components/ui/badge'
import React from 'react'

const LatestJobCard = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-blue-600'>India</p>
        </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className=' text-sm  text-black-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil aliquam soluta illo vel.</p>
      </div>
      <div className=' flex items-center gap-2 mt-4'>
        <Badge className={"text-blue-700 font-bold"} variant="ghost"> 12 positions</Badge>
        <Badge className={"text-[#821536] font-bold"} variant="ghost"> Part Time</Badge>
        <Badge className={"text-[#621a9e] font-bold"} variant="ghost"> 24LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCard