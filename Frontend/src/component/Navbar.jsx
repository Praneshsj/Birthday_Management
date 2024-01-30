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
import React from 'react';
import "../assets/css/Navbar.css" 
import SwipeableTemporaryDrawer from './Sidebar';
// import logo1 from "../assets/images/Logo.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      {/* <img src={} alt="Description of the image"/> */}
      </div>
      <SwipeableTemporaryDrawer/>
      <div className='name'>
      <h2>Celebrations</h2>
      </div>
      <ul className="nav-links">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/Booking">Book</Link></li>
      <li className="nav-item"><Link to="/Contact">Contact</Link></li>
      
        <li className="nav-item dropdown">
          <span className="nav-link"><Link to="/service"></Link>Service</span>
          <div className="dropdown-content">
            <a href="#">food</a>
            <a href="#">dance</a>
            <a href="#">music</a>
          </div>
        </li>
        <li className='nav item'><Link to="/FirstLogin">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;





