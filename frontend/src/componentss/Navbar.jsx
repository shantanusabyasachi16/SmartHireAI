import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for routing in React apps
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from '../components/ui/dropdown-menu'; // Adjust import path as needed
import { Button } from '../components/ui/button'; // Adjust import path as needed
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'; // Adjust import path as needed
import { Sheet, SheetTrigger, SheetContent } from '../components/ui/sheet'; // Adjust import path as needed

export default function Navbar() {
const user= {};
const [isOpen, setisOpen] = useState(false)
const handlecloseNavbar=()=>{
  setisOpen((prev)=>!prev);
}



return (
  <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
    <div className="w-full flex h-16 items-center justify-between bg-white px-4 md:px-6">
      <Link to="/" className="flex items-center gap-2">
        <BriefcaseIcon className="h-6 w-6 text-muted-foreground  " />
        <span className="text-2xl font-extrabold transition duration-300">
          <span className="text-green-500 hover:text-green-700">Talent</span>
          <span className="text-green-400 hover:text-green-700">Link</span>
        </span>



        </Link>
        <nav className="hidden items-center gap-20 md:flex">
        <Link to="/find-job" className="text-sm text-black font-medium transition-colors hover:text-green-500">
          Find Job
         </Link>

          <Link to="/companies" className="text-sm text-black font-medium transition-colors hover:text-green-500">
            Companies
          </Link>
          <Link to="/upload-job" className="text-sm text-black font-medium transition-colors hover:text-green-500">
            Upload Job
          </Link>
          <Link to="/about-us" className="text-sm text-black font-medium transition-colors hover:text-green-500">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <MailIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">john@example.com</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link to="/find-job" className="text-sm font-medium transition-colors hover:text-primary">
                Find Job
              </Link>
              <Link to="/companies" className="text-sm font-medium transition-colors hover:text-primary">
                Companies
              </Link>
              <Link to="/upload-job" className="text-sm font-medium transition-colors hover:text-primary">
                Upload Job
              </Link>
              <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
