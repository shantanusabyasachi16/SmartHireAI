import { setAlljobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/endpoint'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
 useEffect(()=>{
    const fetchalljobs = async()=>{
try {
    const res= await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true});
    if (res.data.success) {
        dispatch(setAlljobs(res.data.jobs));
    }
} catch (error) {
    console.log(error);
    
}
    }
    fetchalljobs();

 },[])
}
export default useGetAllJobs