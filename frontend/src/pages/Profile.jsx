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
  useGetAllappliedjobs(); // to display all applied jobs of user
  const [open, setopen] = useState(false);
  const { user } = useSelector(store => store.auth);

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl my-5 p-8 transition-transform duration-300 hover:shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt={`${user?.fullname} profile photo`}
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl text-gray-900 dark:text-gray-100">{user?.fullname}</h1>
              <p className="text-gray-700 dark:text-gray-400 truncate max-w-xs" title={user?.profile?.bio}>
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setopen(true)}
            className="text-right bg-gradient-to-r from-purple-500 to-purple-700 text-white dark:from-purple-700 dark:to-purple-800 hover:from-purple-600 hover:to-purple-800 dark:hover:from-purple-800 dark:hover:to-purple-900 transition-all duration-200"
            variant="outline"
          >
            <Pen className="text-gray-100" />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-4 my-2 text-gray-700 dark:text-gray-400">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-4 my-2 text-gray-700 dark:text-gray-400">
            <Contact />
            <span>{user?.phonenumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-medium text-gray-900 dark:text-gray-100">Skills</h1>
          <div className="flex flex-wrap gap-3 my-2">
            {
              user?.profile?.skills && user?.profile?.skills.length > 0
                ? user?.profile?.skills.map((item, index) => (
                  <Badge key={index} className="px-3 py-1 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded-md">
                    {item}
                  </Badge>
                ))
                : <span className="text-gray-700 dark:text-gray-400">NA</span>
            }
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold text-gray-900 dark:text-gray-100">Resume</Label>
          {
            isresume
              ? <a target='_blank' href={user?.profile?.resume} className='text-blue-500 dark:text-blue-400 hover:underline cursor-pointer'>
                  {user?.profile?.resumeOriginalName}
                </a>
              : <span className="text-gray-700 dark:text-gray-400">NA</span>
          }
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 mt-5">
        <h1 className="font-bold text-lg my-8 text-gray-900 dark:text-gray-100">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfile open={open} setopen={setopen} />
    </div>
  );
};

export default Profile;
