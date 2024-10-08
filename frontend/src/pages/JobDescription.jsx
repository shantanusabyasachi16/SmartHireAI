import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setsingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";
import { Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const JobDescription = () => {
  const navigate = useNavigate();
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const isApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;

  const [applied, setApplied] = useState(isApplied);
  const [coverLetter, setCoverLetter] = useState("");

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
        setApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setsingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setsingleJob(res.data.job));
          setApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

 
  return (
    <div className="max-w-7xl mx-auto my-10 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="animate-slideInLeft">
          <h1 className="font-bold text-xl text-gray-900 dark:text-gray-100">
            {singleJob?.title}
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge
              className="text-blue-700 dark:text-blue-400 font-bold animate-bounce"
              variant="ghost"
            >
              {singleJob?.position}
            </Badge>
            <Badge
              className="text-[#821536] dark:text-[#e57373] font-bold animate-bounce"
              variant="ghost"
            >
              {singleJob?.jobType}
            </Badge>
            <Badge
              className="text-[#621a9e] dark:text-[#9575cd] font-bold animate-bounce"
              variant="ghost"
            >
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : jobApply}
          disabled={isApplied}
          className={`rounded-full ${
            isApplied
              ? "bg-gradient-to-r from-gray-600 to-gray-400 cursor-not-allowed animate-pulse"
              : "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500  text-white "
          } transition-all duration-200`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 dark:border-b-gray-700 font-medium py-4 animate-slideInLeft">
        Job Description
      </h1>
      <div className="text-gray-900 dark:text-gray-100 animate-fadeIn">
        <h1 className="font-bold my-1">
          Role: <span className="pl-4 font-normal">{singleJob?.title}</span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal">{singleJob?.location}</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal">{singleJob?.description}</span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal">{singleJob?.experience} yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal">{singleJob?.salary} LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal">
            {singleJob?.applications?.length}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal">
            {singleJob?.createdAt.split("T")[0]}
          </span>
        </h1>
      </div>

      {/* Cover Letter Section */}
      {!isApplied && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Cover Letter</h2>
            <Button
              onClick={() => navigate("/generatecoverletter")}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full py-2 px-4 flex items-center gap-2 transition-all duration-300"
            >
              Generate from AI
              <Sparkles className="animate-glow" />
            </Button>
          </div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
            rows="10"
       
            
            placeholder="Paste or generate your cover letter here..."
          />
        </div>
      )}
    </div>
  );
};

export default JobDescription;
