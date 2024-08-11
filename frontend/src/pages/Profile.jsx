import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Contact, Mail, Pen } from "lucide-react";
import React, { useState } from "react";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";
import useGetAllappliedjobs from "@/hooks/useGetAllappliedjobs";



const isresume = true;
const Profile = () => {
  useGetAllappliedjobs();//to display all applied jobs of user
  const [open, setopen] = useState(false);
  const {user} = useSelector(store=>store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className=" flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
            <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl"> {user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={()=>setopen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-4 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-4 my-2">
            <Contact />
            <span>{user?.phonenumber}</span>
          </div>
        </div>
        <div className="my-5">
        <h1>Skills</h1>
<div className="flex items-center gap-3 my-2">
   {
  user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
   }
</div>

        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
         {
          isresume? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
        }
        </div>
      </div>
      <div className=" max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-8"> Applied Jobs</h1>
        <AppliedJobTable />

      </div>
      <UpdateProfile open={open} setopen={setopen}/>
    </div>
  );
};

export default Profile;
