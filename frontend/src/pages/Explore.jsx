import Navbar from '@/components/shared/Navbar'
import React, { useEffect } from 'react'
import Jobsss from './Jobsss';
import { useDispatch, useSelector } from 'react-redux';
import { setsearchquery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';



const Explore = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job)
    const dispatch = useDispatch();
    useEffect(()=>{
 dispatch(setsearchquery(""));
    },[])
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-xl my-10'> Search Results({allJobs.length})</h1>
            <div className='grid grid-cols-3 map-4 '>
            {
                allJobs.map((job)=>{
                    return(
                        <Jobsss key={job._id} job={job}/>
                    )
                })
            }
            </div>
            
        </div>
    </div>
  )
}

export default Explore