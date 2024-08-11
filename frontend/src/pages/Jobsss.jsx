import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Jobsss = ({ job }) => {
  const navigate = useNavigate();

  // Calculate days since job was created
  const days = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const difference = currentTime - createdAt;
    return Math.floor(difference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
     <div className="flex items-center justify-between">
  <p className="text-sm text-gray-500 dark:text-gray-400">
    {days(job?.createdAt) === 0 ? "Today" : `${days(job?.createdAt)} days ago`}
  </p>
  <Button variant="outline" className="rounded-full" size="icon">
    <Bookmark className="text-gray-500 dark:text-gray-400" />
  </Button>
</div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg text-gray-800 dark:text-gray-200">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 text-gray-800 dark:text-gray-200">{job?.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 dark:text-blue-400 font-bold" variant="ghost">
          {job?.position}
        </Badge>
        <Badge className="text-[#821536] dark:text-[#e57373] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#621a9e] dark:text-[#9575cd] font-bold" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="text-gray-800 dark:text-gray-200"
        >
          Details
        </Button>
        <Button className="bg-[#621a9e] text-white dark:bg-[#9575cd] dark:text-gray-900 font-bold">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Jobsss;
