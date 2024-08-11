import React from "react";
import { Link } from "react-router-dom";

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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

export default function Footer() {
  return (
    <footer className="bg-[#3e1f5f] py-8 md:py-12 w-full text-gray-300 dark:bg-[#2a1a40] dark:text-gray-400">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="w-6 h-6 text-purple-500 dark:text-purple-400" />
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#dda0dd] dark:from-[#6a1b9a] dark:to-[#d6a7e5] shadow-lg">
              SmartHire
              <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-[#dda0dd] to-[#8a2be2] dark:from-[#d6a7e5] dark:to-[#6a1b9a]">
                AI
              </span>
            </h1>
          </div>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#a64d79] to-[#dda0dd] dark:from-[#80558c] dark:to-[#d6a7e5] text-xm font-medium shadow-sm">
            Empowering businesses with intelligent hiring solutions.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-semibold text-lg text-purple-600 dark:text-purple-300">Follow us on social media</h3>
          <div className="flex items-center gap-4">
            <Link to="#" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5 text-gray-400 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5 text-gray-400 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <TwitterIcon className="w-5 h-5 text-gray-400 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300" />
            </Link>
            <Link to="#" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <h3 className="font-semibold text-lg text-purple-600 dark:text-purple-300">About Us</h3>
          <div className="flex flex-col gap-2 items-end">
            <Link to="#" className="font-medium text-purple-400 hover:text-purple-200 dark:text-purple-300 dark:hover:text-purple-100">
              Our Story
            </Link>
            <Link to="#" className="font-medium text-purple-400 hover:text-purple-200 dark:text-purple-300 dark:hover:text-purple-100">
              Our Team
            </Link>
            <Link to="#" className="font-medium text-purple-400 hover:text-purple-200 dark:text-purple-300 dark:hover:text-purple-100">
              Careers
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex justify-center text-xs text-gray-400 dark:text-gray-500">
        <p className="text-center">&copy; 2024 SmartHireAI&trade; All rights reserved.</p>
      </div>
    </footer>
  );
}
