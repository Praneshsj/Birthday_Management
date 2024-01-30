// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Userpanel from "./pages/Userpanel";
import Learnmore from "./pages/Learnmore";
import FirstLogin from "./pages/FirstLogin";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import CollegeList from "./pages/CollegeList";
import Venue from "./pages/Venue";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/user" element={<Userpanel />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/firstlogin" element={<FirstLogin />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CollegeList" element={<CollegeList/>} />
        <Route path="/Venue" element={<Venue />} />
      </Routes>
    </Router>
  );
}

export default App;
