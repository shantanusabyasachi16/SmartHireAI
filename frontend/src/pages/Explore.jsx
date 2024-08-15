import Navbar from '@/components/shared/Navbar'
import React, { useEffect } from 'react'
import Jobsss from './Jobsss';
import { useDispatch, useSelector } from 'react-redux';
import { setsearchquery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import {motion} from "framer-motion";
const Explore = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return ()=>{
            dispatch(setsearchquery(""));
        }
        
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>
                    Search Results ({allJobs.length})
                </h1>
                {allJobs.length === 0 ? (
                    <p className='text-center text-gray-500'>No jobs found.</p>
                ) : (
                    <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {allJobs.map((job) => {
                            return(
                            <Jobsss key={job._id} job={job} />)
                        })
                        }
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Explore;
