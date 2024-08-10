import { setallApliedjobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"


const useGetAllappliedjobs = () => {
 const disaptch = useDispatch();

 useEffect(()=>{
    const fetchalljobs = async()=>{
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/get`,{withCredentials:true});
           console.log(res.data);
           
            if (res.data.success) {
                disaptch(setallApliedjobs(res.data.application))
                
            }
        } catch (error) {
            console.log(error);
            
        }
    }
fetchalljobs();
 },[])
}

export default useGetAllappliedjobs