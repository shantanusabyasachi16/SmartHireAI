import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/endpoint";
import { toast } from "sonner";

const Signup = () => {
    const [input,setinput]= useState({
        fullname:"",
        email:"",
        phonenumber:"",
        role:"",
        file:"",
    
      });
      const navigate = useNavigate();
    
      const changeEventHandler= (e)=>{
    setinput({...input,[e.target.name]:e.target.value})
      }
      const changeFileHandler = (e)=>{
    setinput({...input,file:e.target.files?.[0]})
      }


      const SubmitHandler = async(e)=>{
    e.preventDefault();
    const formData = new FormData();// to convert all data in a form
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phonenumber", input.phonenumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file)
    }
    try {
      const res =await axios.post(`${USER_API_END_POINT}/register`, formData,{
        headers: { 'Content-Type': "multipart/form-data" },
        withCredentials: true,
      })
   if(res.data.success){
    navigate("/login")
    toast.success(res.data.success)
   }
    } catch (error) {
      toast.error(error.response.data.message)
      
    }
  }

  
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={SubmitHandler}
          className=" w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className=" font-bold text-xl mb-6">Create your TalentLink profile</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" value={input.fullname} name="fullname" onChange={changeEventHandler} placeholder="What is you name?" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email"  value={input.email} name="email" onChange={changeEventHandler} placeholder="Tell us your EmailID" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="text"  value={input.phonenumber} name="phonenumber" onChange={changeEventHandler} placeholder="Enter your mobile number" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="paswword"  value={input.paswword} name="password" onChange={changeEventHandler} placeholder="Enter your Password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-5 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="student"
                checked ={input.role ==='student'}
                onChange ={changeEventHandler}
                className="curser-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked ={input.role ==='recruiter'}
                onChange ={changeEventHandler}
                className="curser-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
              </RadioGroup>
              <div className="flex items-center gap-2">
               <Label>Profile</Label>
            <Input
            accept="image/*"
            type="file"
           onChange={changeFileHandler}
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
