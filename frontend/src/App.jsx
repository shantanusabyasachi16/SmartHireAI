import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';

import Signup from './components/Login/Signup';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Jobs from './pages/Jobs';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import JobDescription from './pages/JobDescription';
import Companies from './adminPages/Companies';
import CreateCompany from './adminPages/CreateCompany';
import CompanySetup from './adminPages/CompanySetup';
import AdminJobs from './adminPages/Adminjobs';
import PostNewJob from './adminPages/PostNewJob';
import Applicants from './adminPages/Applicants';
import ProtectedRoute from './adminPages/Protected Route';
import GenerateCoverLetter from './pages/GenerateCoverLetter';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/jobs',
    element: <Jobs />,
  },
  {
    path: '/description/:id',
    element: <JobDescription />,
  },
  {
    path: '/generatecoverletter',
    element: <GenerateCoverLetter/>,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  // Admin routes
  {
    path: '/admin/companies',
    element: <ProtectedRoute><Companies /></ProtectedRoute>,
  },
  {
    path: '/admin/companies/create',
    element: <ProtectedRoute><CreateCompany /></ProtectedRoute>,
  },
  {
    path: '/admin/companies/:id',
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>,
  },
  {
    path: '/admin/jobs',
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>,
  },
  {
    path: '/admin/jobs/create',
    element: <ProtectedRoute><PostNewJob /></ProtectedRoute>,
  },
  {
    path: '/admin/jobs/:id/applicants',
    element: <ProtectedRoute><Applicants /></ProtectedRoute>,
  },
]);

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
