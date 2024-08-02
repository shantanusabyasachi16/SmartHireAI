import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Jobsss = () => {
  const navigate = useNavigate();
  const jobid ="12334455fttffe"
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex ityems-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
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
          <h1 className="font-medium text-lg">company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt ex earum culpa quod, aut pariatur excepturi non dignissimos eaque distinctio doloribus delectus facilis recusandae adipisci quasi, fuga quos impedit?</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
       <Badge className={"text-blue-700 font-bold"} variant="ghost"> 12 positions</Badge>
        <Badge className={"text-[#821536] font-bold"} variant="ghost"> Part Time</Badge>
        <Badge className={"text-[#621a9e] font-bold"} variant="ghost"> 24LPA</Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${jobid}`)}variant="outline"> Details</Button>
        <Button className="bg-[#621a9e] font-bold">Save For Later</Button>
        </div>
       
    </div>
  );
};

export default Jobsss;
