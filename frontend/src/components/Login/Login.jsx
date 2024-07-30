
import Navbar from "../Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login= () => {
  
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className=" w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className=" font-bold text-xl mb-5">Login</h1>
          
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Tell us your EmailID" />
          </div>
          
          <div className="my-2">
            <Label>Password</Label>
            <Input type="paswword" placeholder="Enter your Password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-5 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="student"
                className="curser-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                className="curser-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
              </RadioGroup>
           
           
          </div>
          <Button type="submit"  className="w-full my-4">Login</Button>
          <span className="text-sm">Dont't have an account?<Link to="/signup" className="text-blue-700">Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
