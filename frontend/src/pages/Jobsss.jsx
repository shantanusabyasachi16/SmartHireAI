import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Jobsss = ({job}) => {
  const navigate = useNavigate();

  //how many days before job is created
  const days = (mongodbTime)=>{
    const createdAt = new Date(mongodbTime)
    const currentTime = new Date();
    const diffrence = currentTime-createdAt
    return Math.floor(diffrence/(1000*24*60*60))

  }

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex ityems-center justify-between">
        <p className="text-sm text-gray-500">{days(job?.createdAt)==0?"Today":`${days(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://i.pinimg.com/originals/09/2f/7b/092f7b121aaabf4449aee3555b0f26a2.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
       <Badge className={"text-blue-700 font-bold"} variant="ghost">{job?.postion}</Badge>
        <Badge className={"text-[#821536] font-bold"} variant="ghost">{job?.jobType}</Badge>
        <Badge className={"text-[#621a9e] font-bold"} variant="ghost">{job?.salary}LPA</Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${job?._id}`)}variant="outline"> Details</Button>
        <Button className="bg-[#621a9e] font-bold">Save For Later</Button>
        </div>
       
    </div>
  );
};

export default Jobsss;
