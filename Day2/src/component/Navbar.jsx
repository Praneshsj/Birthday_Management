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
    <nav className="nnavbar">
      <div className="logo">
      {/* <img src={} alt="Description of the image"/> */}
      </div>
      <div className='togglebtn'>
      <SwipeableTemporaryDrawer/>
      </div>
      <div className='nname'>
      <h2>Celebrations</h2>
      </div>
      <ul className="nnavlinks">
      <li className="nnav-item"><Link to="/">Home</Link></li>
      <li className="nnav-item"><Link to="/Login">Book</Link></li>
      <li className="nnav-item"><Link to="/Contact">Contact</Link></li>
      
        <li className="nnav-item dropdown">
          <span className="nnav-link"><Link to="/service"></Link>Service</span>
          <div className="ddropdown-content">
            <a href="/FoodPage">Food</a>
            <a href="/DancePage">Dance</a>
            <a href="/FunActivitiesPage">Activity</a>
          </div>
        </li>
        <li className='nnav item'><Link to="/FirstLogin">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;





