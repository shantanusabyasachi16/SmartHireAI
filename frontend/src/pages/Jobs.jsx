import Navbar from "@/components/shared/Navbar";
import React from "react";
import FilterCards from "./FilterCards";
import Jobsss from "./Jobsss";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  const {allJobs} = useSelector(store=>store.job)
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCards />
          </div>
          {
            allJobs.length <= 0 ? (
              <span>Job not Found</span>
            ) : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-4">
                  {
                  allJobs.map((job) => (
                    <div key={job?._id}>
                      <Jobsss job={job} />
                    </div>
                  ))}
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
