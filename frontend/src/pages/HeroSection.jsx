import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full  font-bold text-[#2b004e]">
      
          INDIA'S #1 JOB PLATFORM
        </span>
        <h1 className=" text-5xl font-bold">
          Search , Apply & <br /> Get Your{" "}
          <span className=" text-[#4b0082]">Dream Jobs</span>
        </h1>
        <p className="font-medium"> Discover 50 lakh+ career opportunity</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <Input
          type="text"
          placeholder="Search your Jobs"
          className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#4b0082]">
            <Search className="h-5 w-5"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
