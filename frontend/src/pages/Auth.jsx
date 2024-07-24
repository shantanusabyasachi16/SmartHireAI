import { useNavigate } from 'react-router-dom';
import { Office } from '@/assets';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Signup } from '@/componentss'

function Auth() {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  
  let form = location?.state?.from?.pathname || "/";

  if (user.token) {
    navigate(form, { replace: true });
    return null; 
  }

  return (
    <div className='w-full'>
      <img src={Office} alt='Office' className='object-contain' />
      <Signup open={open} setOpen={setOpen} />
    </div>
  );
}

export default Auth;
