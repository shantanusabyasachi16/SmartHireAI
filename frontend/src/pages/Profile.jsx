import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Contact, Mail, Pen } from "lucide-react";
import React from "react";
import AppliedJobTable from "./AppliedJobTable";
const Skilss = ["java", "javascript", "python"];
const isresume = true;
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className=" flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pinimg.com/originals/09/2f/7b/092f7b121aaabf4449aee3555b0f26a2.png" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>Add your bio</p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-4 my-2">
            <Mail />
            <span>shantanu@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 my-2">
            <Contact />
            <span>987654390897</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skilss</h1>
          <div className=" flex items-center gap-3 my-2">
            {Skilss.length != 0 ? (
              Skilss.map((item, index) => <Badge key={index}>item</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isresume ? (
            <a
              target="blank"
              href="https://github.com/shantanusabyasachi16"
              className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer"
            >
              ShantanuGithub
            </a>
          ) : (
            <span>Na</span>
          )}
        </div>
      </div>
      <div className=" max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-8"> Apllied Jobs</h1>
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
