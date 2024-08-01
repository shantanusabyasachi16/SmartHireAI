import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {user}=  useSelector(store=>store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
          SmartHire<span className="text-[#50B498]">AI</span>
          </h1>
        </div>
        <div className="flex items-center gap-20">
          <ul className="flex font-medium items-center gap-10">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/jobs">Jobs</Link></li>
         <li><Link to="/explore">Explore</Link></li>
         
          </ul>
          {!user ? (
            <div className="flex  gap-2">
              <Link to="/login">
                
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#50B498] hover:bg-[#468585]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">shantanu swain</h4>
                    <p className="text-small text-muted-foreground">
                      Fullstack Developer
                    </p>
                  </div>
                </div>
                <div className="flex items-center my-2 gap-2 cursor-pointer">
                  <User2 />
                  <Button variant="link">Profile</Button>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
