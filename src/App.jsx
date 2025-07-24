import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import NewNavbar from "./Components/NewNavbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import UsersPage from "./Pages/Userspage";
import ContactUs from "./Pages/ContactUsContent";
import JobDetail from "./Pages/JobDetail";
import JobStatus from "./Pages/JobStatus";
import AdimUserLoginPage from "./Pages/AdimUserLoginPage";
import UserLogin from "./Pages/UserLogin";
import AdimLogin from "./Pages/AdminLogin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import AdminDashboard from "./Pages/AdminDashboard";
import UserDashboard from "./Pages/UserDashboard";

const App = () => {
  const location = useLocation();
    const navigate = useNavigate();

  // login section 
  // useEffect (()=>{
  //   const unsubscribe = onAuthStateChanged(auth,(user)=>{
  //     if(!user && location.pathname !== '/userlogin'){
  //       navigate('/userlogin')
  //     }
  //   })
  //    return () => unsubscribe();
  // }, [location.pathname]);

  // Routes where Footer should not be shown
  const hideFooterRoutes = ["/userlogin", "/adminlogin", "/signup"];

  return (
    <div >
       {/* Show Navbar only on homepage and newNavbar*/}
      {location.pathname === "/" && <Navbar />} 
       {location.pathname === '/userpage' && <NewNavbar/>}
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UsersPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/user/:id" element={<JobDetail />} />
        <Route path="/apply" element={<JobStatus />} />
        <Route path="/signup" element={<AdimUserLoginPage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminlogin" element={<AdimLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/dashboard" element={<UserDashboard/>}/>
      </Routes>

  

      {/* Hide Footer on specific routes */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
