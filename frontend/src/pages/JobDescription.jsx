import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const JobDescription = () => {
  const isapplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items -center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Development</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              12 positions
            </Badge>
            <Badge className={"text-[#821536] font-bold"} variant="ghost">
              Part Time
            </Badge>
            <Badge className={"text-[#621a9e] font-bold"} variant="ghost">
              24LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isapplied}
          className={`rounded-full ${
            isapplied
              ? "bg-blue-900 cursor-not-allowed"
              : "bg-[#660e60] hover:bg-[#5a1765] "
          }`}
        >
          {isapplied ? "Already Applied" : "Apply Now"}
        </Button>
        {/*in css if we want to contionally render anything we have to use ``  */}
      </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Decription</h1>
      <div>
        <h1  className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-900">Frontend Development</span></h1>
        <h1  className="font-bold my-1">Loaction:<span className="pl-4 font-normal text-gray-900">Banglore</span></h1>
        <h1  className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-900">Lorem ipsum dolor sit</span></h1>
        <h1  className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-900">2 years</span></h1>
        <h1  className="font-bold my-1">salary:<span className="pl-4 font-normal text-gray-900">12LPA</span></h1>
        <h1  className="font-bold my-1">Toyal Apllicants:<span className="pl-4 font-normal text-gray-900">19</span></h1>
        <h1  className="font-bold my-1">posted Date:<span className="pl-4 font-normal text-gray-900">17-5-2024</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
