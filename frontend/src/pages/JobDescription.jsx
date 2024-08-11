import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setsingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  // Check if the user has applied for the job
  const isApplied = singleJob?.applications?.some(
    (application) => application.applicant === user?._id
  ) || false;

  const [applied, setApplied] = useState(isApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const jobApply = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setApplied(true); // Update local state
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        }; // Update total applicants
        dispatch(setsingleJob(updateSingleJob)); // Real-time update
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}/get/${jobId}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setsingleJob(res.data.job));
          setApplied(res.data.job.applications.some(
            (application) => application.applicant === user?._id
          ));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl text-gray-900 dark:text-gray-100">
            {singleJob?.title}
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 dark:text-blue-400 font-bold" variant="ghost">
              {singleJob?.position}
            </Badge>
            <Badge className="text-[#821536] dark:text-[#e57373] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#621a9e] dark:text-[#9575cd] font-bold" variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : jobApply}
          disabled={isApplied}
          className={`rounded-full ${isApplied ? "bg-blue-900 cursor-not-allowed" : "bg-[#660e60] hover:bg-[#5a1765]"} text-white`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 dark:border-b-gray-700 font-medium py-4">
        Job Description
      </h1>
      <div className="text-gray-900 dark:text-gray-100">
        <h1 className="font-bold my-1">
          Role: <span className="pl-4 font-normal">{singleJob?.title}</span>
        </h1>
        <h1 className="font-bold my-1">
          Location: <span className="pl-4 font-normal">{singleJob?.location}</span>
        </h1>
        <h1 className="font-bold my-1">
          Description: <span className="pl-4 font-normal">{singleJob?.description}</span>
        </h1>
        <h1 className="font-bold my-1">
          Experience: <span className="pl-4 font-normal">{singleJob?.experience} yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal">{singleJob?.salary} LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants: <span className="pl-4 font-normal">{singleJob?.applications?.length}</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date: <span className="pl-4 font-normal">{singleJob?.createdAt.split("T")[0]}</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
