import React, { useState } from 'react';
// import '../assets/css/Register.css'; 
import Navbar from '../component/Navbar'

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [eventname, setEventname] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (email && username && mobile && password && cpassword && password === cpassword) {
      setError('');
      console.log('Booking done successful!');
    } else {
      setError('Please fill in all the fields.');
    }
  };

  return (
    <div>
      <Navbar/>
      <br></br><br></br>
    <div className="signup-container">
    <center>
    <h2>Book Event</h2>
    </center>
    <form>
    <div className="form-group">
    <label>Email:</label>
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Name:</label>
    <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>EventName:</label>
    <input
    type="text"
    value={eventname}
    onChange={(e) => setEventname(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Mobile Number:</label>
    <input
    type="tel"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Birthday date</label>
    <input
    type="date"
    value={Date}
    onChange={(e) => setDate(e.target.value)}
    />
    </div>
    {/* <div className="form-group">
    <label>Confirm Password:</label>
    <input
    type="password"
    value={cpassword}
    onChange={(e) => setCPassword(e.target.value)}
    />
    </div> */}
    <div className="form-group">
    <center>
    <button type="button" onClick={handleSignup}>
    Book
    </button>
    </center>
    </div>
    {error && <div className="error-message">{error}</div>}
    </form>
    </div>
    </div>
    );
};

export default Register;