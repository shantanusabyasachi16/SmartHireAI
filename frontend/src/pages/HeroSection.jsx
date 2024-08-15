import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setsearchquery } from "@/redux/jobSlice";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const searchhandler = () => {
    console.log("Query before dispatch:", query);
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
          transition={{ duration: 0.3 }}
          className="mx-auto px-4 py-2 rounded-full font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff007a] to-[#00d2ff] neon-text animate-pulse"
        >
          INDIA'S #1 JOB PLATFORM
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0081] via-[#ff8c00] to-[#00d2ff] neon-text animate-text-glow"
        >
          Search , Apply & <br /> Get Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0081] to-[#00d2ff] animate-text-glow">
            Dream Jobs
          </span>
        </motion.h1>
        <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff0066] to-[#00ccff] text-2xl relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#ff0066] before:to-[#00ccff] before:opacity-50 before:blur-lg before:content-['']">
          Discover 50 lakh+ career opportunities
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 rounded-full items-center mx-auto overflow-hidden">
      <Input
        type="text"
        placeholder="Search your Jobs"
        onChange={(e) =>setQuery(e.target.value)}
        value={query}
        className="outline-none border-none w-full px-4 py-2"
      />
      <Button
        className="bg-[#4b0082] text-white rounded-r-full p-2"
        onClick={searchhandler}
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
      </div>
    </div>
  );
};

export default HeroSection;
