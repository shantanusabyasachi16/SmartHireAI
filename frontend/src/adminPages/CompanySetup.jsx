import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { COMPANY_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";
import { ArrowBigLeft, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CompanySetup = () => {
  const [input,setinput]= useState({
    name:"",
    description:"",
    website:"",
    location:"",
    file:null,
  });
  const {singleCompany} = useSelector(store=>store.company); //initialmstate= null
  const [loading,setloading]= useState(false);
  const params= useParams();
  const navigate = useNavigate();
  const changeEvent =(e)=>{
    setinput({...input,[e.target.name]:e.target.value});
  }
  const changeFilehandler =(e)=>{
    const file = e.target.files?.[0];//accessing the 1st file
    setinput({...input,file});
  }
  const submitHandler = async(e)=>{
    e.preventDefault();
    console.log(input);
    const formdata = new FormData();
    formdata.append("name",input.name)
    formdata.append("description",input.description)
    formdata.append("website",input.website)
    formdata.append("loaction",input.location)
    if (input.file) {
      formdata.append("file",input.file)
    }
    try {
      setloading(true);
      const res= await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`,formdata,{
    headers:{
      'Content-Type':'multipart/form-data'
    },
    withCredentials:true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies")
        
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      
    }finally{
      setloading(false);
    }
   
  }
  useEffect(()=>{
    setinput({
      name: singleCompany.name ||"",
    description: singleCompany.description ||"",
    website: singleCompany.website ||"",
    location: singleCompany.location ||"",
    file:singleCompany.file ||"",

    })
  },[singleCompany])

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className=" flex items-center gap-4 p-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-900 font-semibold"
              onClick={()=>navigate('/admin/companies')}
           >
              <ArrowBigLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Set up Your Company</h1>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
            <Label>Company Name</Label>
          <Input
          type="text"
          name="name"
          value={input.name}
          onChange= {changeEvent}
          />
            </div>
            <div>
            <Label>Description</Label>
          <Input
          type="text"
          name="description"
          value={input.description}
          onChange= {changeEvent}
          />
            </div>
            <div>
            <Label>Website</Label>
          <Input
          type="text"
          name="website"
          value={input.website}
          onChange= {changeEvent}
          />
            </div>
            <div>
            <Label>Location</Label>
          <Input
          type="text"
          name="location"
          value={input.location}
          onChange= {changeEvent}
          />
            </div>
            <div>
            <Label>Logo</Label>
          <Input
          type="file"
          accept="image/*"
          name="location"
         
          onChange= {changeFilehandler}
          />
            </div>
         
          </div>
   
      {
          loading ?<Button className='w-full my-4'> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:<Button type="submit" className="w-full my-4">Update</Button>
      }
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
