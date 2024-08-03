import React from 'react';
import LatestJobCard from './LatestJobCard';
import { useSelector } from 'react-redux';

const Latestjobs = () => {
  const {  allJobs } = useSelector((store) => store.job);

  return (
    <div className='max-w-7xl mx-auto my-25'>
      <h1 className='text-4xl font-bold'>
        <span className='text-[#591887]'>Latest & Top</span> JOB OPENINGS
      </h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
        { allJobs.length === 0 ? (
          <span>No job available</span>
        ) : (
          allJobs.slice(0, 6).map((job) => <LatestJobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default Latestjobs;
