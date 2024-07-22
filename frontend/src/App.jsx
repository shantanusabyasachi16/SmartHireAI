import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./componentss";
import { 
  About, 
  Auth, 
  Companies, 
  CompanyProfile, 
  Findjobs, 
  JobDetail, 
  Uploadjob, 
  UserProfile 
} from "./pages";

function Layout() {
  const user = true; 
  const location = useLocation();
  return user ? <Outlet /> : <Navigate to="/user-auth" state={{ from: location }} />;
}

function App() {
  const user = {}; // Replace with actual user logic

  return (
    <main>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/find-jobs" replace />} />
          <Route path="/find-jobs" element={<Findjobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route
            path={
              user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/company-profile/:id" element={<CompanyProfile />} />
          <Route path="/upload-job" element={<Uploadjob />} />
          <Route path="/job-detail/:id" element={<JobDetail />} />
        </Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<Auth />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
