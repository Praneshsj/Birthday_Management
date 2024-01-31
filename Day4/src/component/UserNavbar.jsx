import { Link } from 'react-router-dom';
import React from 'react';
import "../assets/css/Navbar.css" 
import SwipeableTemporaryDrawer from './UserSidebar';
// import logo1 from "../assets/images/Logo.png"
const UserNavbar = () => {
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
          <a href="/FoodPage">Food</a>
          <a href="/DancePage">Dance</a>
          <a href="/FunActivitiesPage">Activity</a>
          </div>
        </li>
        <li className='nav item'><Link to="/FirstLogin">Login</Link></li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
