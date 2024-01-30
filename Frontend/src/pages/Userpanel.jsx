import React from 'react';
// import './App.css';
import '../pages/Profile.css';


// import TemporaryDrawer from '../pages/TemporaryDrawer';


function Userpanel() {
  return (
    <div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     
    <div className="container">
      <div className="user-info">
        <h2>Welcome User</h2>
        <p>Email: user@example.com</p>
      </div>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className="dashboard">
        <div className="card">
          <h3>Profile</h3>
          <p>Edit your profile information</p>
          <button style={{backgroundColor:'green'}}><a href="#">Edit Profile</a></button>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p>View your order history</p>
          <button style={{backgroundColor:'green'}}><a href="#">View Orders</a></button>
        </div>
        <div className="card">
          <h3>Settings</h3>
          <p>Manage your account settings</p>
          <button style={{backgroundColor:'green'}}><a href="#">Account Settings</a></button>
        </div>
        <div className="card">
          <h3>Logout</h3>
          <p>Click here to logout</p>
          <button style={{backgroundColor:'green'}}><a href="#">Logout</a></button>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
   
      
   
    </div>
  );
}

export default Userpanel;





