import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";
import AddProfile from "./components/AddProfile";
import SchoolList from "./components/SchoolList";
import SchoolDetail from "./components/SchoolDetail";
import PersonCard from "./components/PersonCard";
import StudentList from "./components/StudentList";
import StudentInfo from "./components/StudentInfo";
import DashboardNavbar from "./components/DashboardNavbar";
import ForgotPassword from "./components/ForgotPassword";
import Otp from "./components/Otp";
import ResetPassword from "./components/ResetPassword";

function App() {
  const Layout = ({ children }) => {
    const location = useLocation();

    // Check if the current path is login or register
    const noNavbarRoutes = [
      "/",
      "/Register",
      "/forgetpassword",
      "/reset",
      "/otp",
    ];
    const dashboardRoutes = ["/Dashboard"];

    // Determine which navbar to render
    const shouldRenderNavbar = !noNavbarRoutes.includes(location.pathname);
    const isDashboardRoute = dashboardRoutes.includes(location.pathname);

    return (
      <>
        {shouldRenderNavbar &&
          (isDashboardRoute ? (
            <Navbar>{children}</Navbar>
          ) : (
            <DashboardNavbar>{children}</DashboardNavbar>
          ))}
        {!shouldRenderNavbar && <>{children}</>}
      </>
    );
  };
  return (
    <div className="bg-[#f0f3f5]">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/addProfile" element={<AddProfile />} />
            <Route path="/schoolInfo" element={<SchoolList />} />
            <Route path="/schoolDetail" element={<SchoolDetail />} />
            <Route path="/teacher" element={<PersonCard />} />
            <Route path="/student" element={<StudentList />} />
            <Route path="/studentInfo" element={<StudentInfo />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
