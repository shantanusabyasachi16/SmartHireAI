import { Badge } from '@/components/ui/badge'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LatestJobCard = ({job}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer'>
        <div>
        <h1 className='font-bold text-bold text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-blue-600'>India</p>
        </div>
      <div>
        <h1 className='font-medium text-lg my-2'>{job?.title}</h1>
        <p className=' text-sm  text-black-200'>{job?.description}</p>
      </div>
      <div className=' flex items-center gap-2 mt-4'>
        <Badge className={"text-blue-700 font-bold"} variant="ghost"> {job?.position}</Badge>
        <Badge className={"text-[#821536] font-bold"} variant="ghost"> {job?.jobType}</Badge>
        <Badge className={"text-[#621a9e] font-bold"} variant="ghost">{job?.salary}</Badge>
      </div>
    </div>
  )
}

export default LatestJobCard