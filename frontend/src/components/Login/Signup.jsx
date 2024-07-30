import React, { useState } from "react";
import Navbar from "../Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
    const [input,setinput]= useState({
        fullname:"",
        email:"",
        phonenumber:"",
        role:"",
        file:"",
    
      });
    
      const changeEventHandler= (e)=>{
    setinput({...input,[e.target.name]:e.target.value})
      }
      const changeFileHandler = (e)=>{
    setinput({...input,file:e.target.files?.[0]})
      }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className=" w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className=" font-bold text-xl mb-6">Create your TalentLink profile</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="What is you name?" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Tell us your EmailID" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="email" placeholder="Enter your mobile number" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="paswword" placeholder="Enter your Password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-5 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="student"
                className="curser-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                className="curser-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
              </RadioGroup>
              <div className="flex items-center gap-2">
               <Label>Profile</Label>
            <Input
            accept="iamge/*"
            type="file"
            className="curser-pointer"
            /> 
              </div>
           
          </div>
          <Button type="submit"  className="w-full my-4">Signup</Button>
          <span className="text-sm">Already have an account?<Link to="/login" className="text-blue-700">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
