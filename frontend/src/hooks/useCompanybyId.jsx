import { setsingleCompany } from '@/redux/company.Slice'

import { COMPANY_API_END_POINT } from '@/utils/endpoint'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useCompanybyId  = (CompanyId) => {
    const dispatch = useDispatch();
 useEffect(()=>{
    const fetchSingleCompany= async()=>{
try {
    const res= await axios.get(`${COMPANY_API_END_POINT}/get/${CompanyId}`,{withCredentials:true});
    if (res.data.success) {
        dispatch(setsingleCompany(res.data.company));
    }
} catch (error) {
    console.log(error);
    
}
    }
    fetchSingleCompany();

 },[CompanyId,dispatch])
}
export default useCompanybyId