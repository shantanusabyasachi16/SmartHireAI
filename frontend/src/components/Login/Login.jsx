import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/endpoint";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
const {loading,user} =useSelector(store=>store.auth);
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
    dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      console.log(res.data.success);

      if (res.data.success) {
        dispatch(setUser(res.data.user))//it will set the data
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error('Error:', error); 
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'An error occurred');
      } else {
        toast.error('An error occurred');
      }
    } finally{
      dispatch(setLoading(false))
    }
  };
  useEffect(()=>{
    if(user){
        navigate("/");
    }
},[])

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={SubmitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Tell us your EmailID"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-5 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="curser-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className="curser-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
         {
          loading ?<Button className='w-full my-4'> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:<Button type="submit" className="w-full my-4">Login</Button>
         }
        
          <span className="text-sm">Don't have an account?<Link to="/signup" className=" font-medium text-blue-700">Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
