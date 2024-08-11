import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, Briefcase, DollarSign, Calendar } from "lucide-react";
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
    <div className="p-5 rounded-lg shadow-md bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.07] hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-gray-600 dark:text-gray-300">
          {days(job?.createdAt) === 0 ? "Today" : `${days(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" size="icon">
          <Bookmark className="text-gray-600 dark:text-gray-300" />
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} alt={`${job?.company?.name} logo`} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{job?.company?.name}</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">India</p>
        </div>
      </div>

      <div className="mb-4">
        <h1 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">{job?.title}</h1>
        <p className="text-sm text-gray-700 dark:text-gray-300 truncate max-w-full" title={job?.description}>
          {job?.description}
        </p>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Badge className="flex items-center gap-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 font-semibold" variant="ghost">
          <Briefcase className="w-4 h-4" />
          {job?.position}
        </Badge>
        <Badge className="flex items-center gap-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 font-semibold" variant="ghost">
          <Calendar className="w-4 h-4" />
          {job?.jobType}
        </Badge>
        <Badge className="flex items-center gap-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 font-semibold" variant="ghost">
          <DollarSign className="w-4 h-4" />
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        >
          Details
        </Button>
        <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white dark:from-purple-800 dark:to-purple-600 hover:from-purple-700 hover:to-purple-500 dark:hover:from-purple-700 dark:hover:to-purple-500 transition-all duration-200 font-bold">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Jobsss;
