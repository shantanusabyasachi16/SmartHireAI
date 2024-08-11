import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/endpoint";
import { setUser } from "@/redux/authSlice";
import { useDarkMode } from "@/hooks/useDarkMode";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [theme, toggleTheme] = useDarkMode();

  const logouthandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6a0dad] via-[#d6a7e5] to-[#4b0082] dark:from-[#d6a7e5] dark:via-[#6a1b9a] dark:to-[#4b0082]">
            SmartHire
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d6a7e5] to-[#6a0dad] dark:from-[#d6a7e5] dark:to-[#6a1b9a]">
              AI
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-20">
          <ul
            className={`flex font-medium items-center gap-10 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {user ? (
              user.role === "recruiter" ? (
                <>
                  <li>
                    <Link
                      to="/admin/companies"
                      className="text-[#6f597a]"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/jobs"
                      className="text-[#6f597a]"
                    >
                      Jobs
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/"
                      className="text-[#6f597a]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className="text-[#6f597a]"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore"
                      className="text-[#6f597a]"
                    >
                      Explore
                    </Link>
                  </li>
                </>
              )
            ) : null}
          </ul>
          <div className="flex items-center gap-4">
            {!user ? (
              <div className="flex gap-2">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="text-purple-600 border-purple-600 bg-transparent hover:bg-purple-100 hover:text-purple-800 dark:text-white dark:border-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 button-animate">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-small text-muted-foreground">
                        {user?.profile?.bio}{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col my-2 ${
                      theme === "dark" ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {user.role === "student" && (
                      <div className="flex items-center my-2 gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">Profile</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logouthandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="p-2 rounded-full ml-2"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
