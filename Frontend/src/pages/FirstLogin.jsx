// import React from 'react'
// import Navbar from '../component/Navbar'
// import Login from'../pages/Login'
// function FirstLogin() {
//   return (
//     <>
//     <Navbar/>
//     <div className='userandadmin'>
//     <div className='userlogin'>
//     {/* <button class="button button1"><Link to="/Login">Learn More</Link></button> */}
//     </div>
//     </div>
//     </>
//   )
// }

// export default FirstLogin
import React from "react";
// import "../assets/css/login.css"; 
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import './FirstLogin.css';

function FirstLogin() {
  return (
    <div className="loginn-container">
    <Navbar/>
      <div className="loginn">
        <button><Link to="/adminlogin">Admin Login</Link></button>
        <button><Link to="/Login">User Login</Link></button>
      </div>
    </div>
  );
}

export default FirstLogin;