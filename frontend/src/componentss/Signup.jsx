import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';

function Signup() {
    const dispatch = useDispatch();
    const location = useLocation();

const [isRegister,setisRegister] = useState(false);
const [accountType,setaccountType] = useState("seeker");
const [ errMsg,seterrMsg] = useState("");


  return (
    <div>Signup</div>
  )
}

export default Signup