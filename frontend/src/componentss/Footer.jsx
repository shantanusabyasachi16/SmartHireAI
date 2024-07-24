import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-muted py-12 md:py-16 lg:py-20">
      <div className="container w-full mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="#" className="flex items-center gap-2" >
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground md:justify-start">
            <Link href="#" className="hover:underline hover:underline-offset-4" >
              Privacy
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4" >
              Cookies
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-2">
              <h4 className="text-sm font-medium">Company</h4>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
               Home
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
                About Us
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
                Services
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
               Our Team
              </Link>
            </div>
            <div className="grid gap-2">
              <h4 className="text-sm font-medium">Policy</h4>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
                Polices
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
               Contact
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
               Faq
              </Link>
            </div>
            <div className="grid gap-2">
              <h4 className="text-sm font-medium">Support</h4>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
                Acconut
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 s" >
                Support Center
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
                Feedback
              </Link>
              <Link href="#" className="text-sm font-medium text-white-500 hover:text-green-500 " >
              Accessibility
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <h4 className="text-sm font-medium">Contact Us </h4>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" >
              <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden -mb-0.5">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#4ade80",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>

      <div className="w-full  py-4">
        <p className="text-sm text-black text-center">
          &copy; 2024 TalentLink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Define the SVG icons as before


// Define the SVG icons as before

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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
}