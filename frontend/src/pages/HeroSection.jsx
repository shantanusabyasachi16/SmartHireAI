import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setsearchquery } from "@/redux/jobSlice";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
const HeroSection = () => {
  const [query, setquery] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();


  const searchhandler = () => {
    dispatch(setsearchquery(query));
    Navigate("/explore");
  };

  
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <motion.span 
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -100 }}
           transition={{ duration: 0.3 }}className="mx-auto px-4 py-2 rounded-full  font-bold text-[#2b004e]">
          INDIA'S #1 JOB PLATFORM
        </motion.span>
        <h1 className=" text-5xl font-bold">
          Search , Apply & <br /> Get Your{" "}
          <span className=" text-[#4b0082]">Dream Jobs</span>
        </h1>
        <p className="font-medium"> Discover 50 lakh+ career opportunity</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <Input
            type="text"
            placeholder="Search your Jobs"
            onChange={(e) => setquery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#4b0082]">
            <Search onClick={searchhandler} className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
