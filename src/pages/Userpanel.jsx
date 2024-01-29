// import{Link} from "react-router-dom";
// import '../component/Navbar.css'
// function Navbar(){
//   return(
//     <div className="Navbartotal">
//     <div id="header">
      
//     <div id="navbar">
      


//       <Link className="navlink" to ="/">Home</Link>
//       <Link className ="navlink" to ="/About">About</Link>
//       <Link className ="navlink" to ="/Contact">Contact</Link>
//       <Link className ="navlink" to ="/Login">Login</Link>
//     </div>
//     </div>
//     </div>
//   )
// }
// export default Navbar
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "../assets/css/Navbar.css"
import "../pages/UserSidebar.css"
import UserSidebar from './UserSidebar';
import { Button } from '@mui/material';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
// import logo1 from "../assets/images/Logo.png"
const Userpanel = () => {
    const[sidebar,SetSidebar]=useState(true);
  const SideBarActive=()=>{SetSidebar(!sidebar)};
  return (
    <nav className="navbar">
      <div className="logo">
      {/* <img src={} alt="Description of the image"/> */}
      </div>
      <div className='name'>
      <h2>Celebrations</h2>
      </div>
      <ul className="nav-links">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/Booking">BOOK</Link></li>
      <li className="nav-item"><Link to="/contact">Contact</Link></li>
      
        <li className="nav-item dropdown">
          <span className="nav-link"><Link to="/service"></Link>Service</span>
          <div className="dropdown-content">
            <a href="#">food</a>
            <a href="#">dance</a>
            <a href="#">music</a>
          </div>
        </li>
        <li className='nav item'><Link to="/Login">Login</Link></li>
        <li><Button onClick={SideBarActive}><ViewHeadlineIcon /></Button>
      <div className={sidebar?"side-active":"side"}>
      <UserSidebar/>
      
      </div></li>
      </ul>
    </nav>
  );
};

export default Userpanel ;





