import { Link } from 'react-router-dom';

// Define icon components
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
    <footer className="bg-muted py-8 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="w-6 h-6" />
            <span className="font-bold text-lg text-[#4b0082] cursor-pointer">SmartHireAI</span>
          </div>
          <p className="text-muted-foreground">Empowering businesses with intelligent hiring solutions.</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold text-lg ">Follow us on social media</h3>
          <div className="flex items-center gap-4">
            <Link to="#" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5 hover:text-blue-600" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5 hover:text-pink-600" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <TwitterIcon className="w-5 h-5 hover:text-blue-400" />
            </Link>
            <Link to="#" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5 hover:text-blue-700" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold text-lg ">About Us</h3>
          <div className="flex flex-col gap-2">
            <Link to="#" className=" font-medium text-black hover:text-[#4b0082] ">
              Our Story
            </Link>
            <Link to="#" className="font-medium text-black hover:text-[#4b0082]">
              Our Team
            </Link>
            <Link to="#" className="font-medium  text-black hover:text-[#4b0082]">
              Careers
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex flex-col items-center text-xs text-muted-foreground">
        <p className="text-center">&copy; 2024 SmartHireAI&trade; All rights reserved.</p>
      </div>
    </footer>
  );
}
