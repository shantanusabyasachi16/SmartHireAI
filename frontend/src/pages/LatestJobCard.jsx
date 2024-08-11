import { Badge } from '@/components/ui/badge'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LatestJobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className='p-5 rounded-md shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 cursor-pointer transition-transform duration-500 hover:scale-[1.07] '
    >
      <div>
        <h1 className='font-bold text-lg text-gray-900 dark:text-gray-100'>{job?.company?.name}</h1>
        <p className='text-sm text-blue-600 dark:text-blue-300'>India</p>
      </div>
      <div>
        <h1 className='font-medium text-lg my-2 text-gray-800 dark:text-gray-300'>{job?.title}</h1>
        <p className='text-sm text-gray-600 dark:text-gray-500'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className="text-blue-600 dark:text-blue-300 font-bold animate-pulse" variant="ghost">
          {job?.position}
        </Badge>
        <Badge className="text-green-600 dark:text-green-300 font-bold animate-pulse" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-purple-600 dark:text-purple-300 font-bold animate-pulse" variant="ghost">
          {job?.salary}
        </Badge>
      </div>
    </div>
  )
}

export default LatestJobCard
