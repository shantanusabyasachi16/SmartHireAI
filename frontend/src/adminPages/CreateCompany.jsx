import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setsingleCompany } from "@/redux/company.Slice";
import { COMPANY_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateCompany = () => {
  const [companyName, setcompanyName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerNewCompany = async () => {
    try {
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      } );
      if(res.data.success){
        dispatch(setsingleCompany(res.data.company))
        toast.success(res.data.message);
        const CompanyId = res?.data?.company?._id
        navigate(`/admin/companies/${CompanyId}`)

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className=" font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur!
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="google,mete,etc"
          onChange={(e) => setcompanyName(e.target.value)}
        />
        <div className=" flex items-center gap-2 my-10">
          <Button onClick={() => navigate("/admin/companies")}>Cancel</Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
