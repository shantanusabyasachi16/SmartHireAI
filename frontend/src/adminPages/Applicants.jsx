import Navbar from "@/components/shared/Navbar";
import React, { useEffect } from "react";
import ApplicationTable from "./ApplicationTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/endpoint";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setallApplicants } from "@/redux/ApplicationSlice";


const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {allApplicants} = useSelector(store=>store.application);
  useEffect(() => {
    const fetchallaplicants = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true})

            dispatch(setallApplicants(res.data.job));
      
        } catch (error) {
            console.log(error);
            
        }
    };
    fetchallaplicants();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">Applicants{allApplicants.applications.length}</h1>
        <ApplicationTable />
      </div>
    </div>
  );
};

export default Applicants;
