import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setsingleJob } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const JobDescription = () => {
  const {singleJob}= useSelector(store=>store.job);
  const {user} = useSelector(store=>store.auth)
  //to find the exact applicant who has applied for the job
  const isapplied = singleJob?.applications?.some(application=>application.applicant ==user?._id)|| false;




  const params = useParams();
  const jobId = params.id;
 
  const dispatch= useDispatch();
  useEffect(()=>{
const fetchSinglejob = async()=>{
  try {
    const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true})
  if (res.data.success) {
    dispatch(setsingleJob(res.data.job));
    
  }
  } catch (error) {
    console.log(error);
    
  }
  
}
fetchSinglejob();
  },[jobId,dispatch,user?._id]) //job id will change (multiple job id)


  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items -center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.position}
            </Badge>
            <Badge className={"text-[#821536] font-bold"} variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className={"text-[#621a9e] font-bold"} variant="ghost">
             {singleJob?.salary}LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isapplied}
          className={`rounded-full ${
            isapplied
              ? "bg-blue-900 cursor-not-allowed"
              : "bg-[#660e60] hover:bg-[#5a1765] "
          }`}
        >
          {isapplied ? "Already Applied" : "Apply Now"}
        </Button>
        {/*in css if we want to contionally render anything we have to use ``  */}
      </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Decription</h1>
      <div>
        <h1  className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-900">{singleJob?.title}</span></h1>
        <h1  className="font-bold my-1">Loaction:<span className="pl-4 font-normal text-gray-900">{singleJob?.location}</span></h1>
        <h1  className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-900">{singleJob?.description}</span></h1>
        <h1  className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-900">{singleJob?.experience}yrs</span></h1>
        <h1  className="font-bold my-1">salary:<span className="pl-4 font-normal text-gray-900">{singleJob?.salary}LPA</span></h1>
        <h1  className="font-bold my-1">Toyal Apllicants:<span className="pl-4 font-normal text-gray-900">{singleJob?.applications?.length}</span></h1>
        <h1  className="font-bold my-1">posted Date:<span className="pl-4 font-normal text-gray-900">{singleJob?.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
