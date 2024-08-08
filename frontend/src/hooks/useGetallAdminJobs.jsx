
import { setallAdminjobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/endpoint'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetallAdminJobs = () => {
    const dispatch = useDispatch();
 useEffect(()=>{
    const fetchAdminjobs = async()=>{
try {
    const res= await axios.get(`${JOB_API_END_POINT}/getadminsjob`,{withCredentials:true});
    if (res.data.success) {
        dispatch(setallAdminjobs(res.data.jobs));
    }
} catch (error) {
    console.log(error);
    
}
    }
    fetchAdminjobs();

 },[])
}
export default useGetallAdminJobs