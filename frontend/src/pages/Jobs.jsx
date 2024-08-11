import Navbar from "@/components/shared/Navbar";
import React, { useEffect, useState } from "react";
import FilterCards from "./FilterCards";
import Jobsss from "./Jobsss";
import { useSelector } from "react-redux";
import {motion} from "framer-motion";

const Jobs = () => {
  const { allJobs, searchquery } = useSelector(store => store.job);
  const [filterJobs, setfilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchquery) {
      const filteredjobs = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(searchquery.toLowerCase()) ||
              job.description .toLowerCase().includes(searchquery.toLowerCase()) ||
               job.location.toLowerCase().includes(searchquery.toLowerCase());
      });
      setfilterJobs(filteredjobs);
    } else {
      setfilterJobs(allJobs);
    }
  }, [allJobs, searchquery]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCards />
          </div>
          {
            filterJobs.length <= 0 ? (
              <span>Job not Found</span>
            ) : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-4">
                  {
                    filterJobs.map((job) => (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        key={job?._id}>
                        <Jobsss job={job} />
                      </motion.div>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Jobs;
