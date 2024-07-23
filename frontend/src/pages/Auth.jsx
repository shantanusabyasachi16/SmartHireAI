import { Office } from '@/assets';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function Auth() {

  const {user} = useSelector(state=> state.user);
  const [open ,setopen] = useState(false);
  const location = useLocation();
  
  let form = location?.state?.form?.pathname ||"/";


  if (user.token){
    return window.location.replace(form);
  }

  return (
    <div className='w-full'>
          <img src={Office} alt='Office' className='object-contain ' />
         
    </div>
  )
}

export default Auth