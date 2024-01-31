// import React, { useState } from 'react';
// // import '../assets/css/Register.css'; 
// import Navbar from '../component/Navbar'

// const Booking = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [eventname, setEventname] = useState('');
//   const [cpassword, setCPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = () => {
//     if (email && username && mobile && password && cpassword && password === cpassword) {
//       setError('');
//       console.log('Booking done successful!');
//     } else {
//       setError('Please fill in all the fields.');
//     }
//   };

//   return (
//     <div>
//       <Navbar/>
//       <br></br><br></br>
//     <div className="signup-container">
//     <center>
//     <h2>Book Event</h2>
//     </center>
//     <form>
//     <div className="form-group">
//     <label>Email:</label>
//     <input
//     type="email"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     />
//     </div>
//     <div className="form-group">
//     <label>Name:</label>
//     <input
//     type="text"
//     value={username}
//     onChange={(e) => setUsername(e.target.value)}
//     />
//     </div>
//     <div className="form-group">
//     <label>EventName:</label>
//     <input
//     type="text"
//     value={eventname}
//     onChange={(e) => setEventname(e.target.value)}
//     />
//     </div>
//     <div className="form-group">
//     <label>Mobile Number:</label>
//     <input
//     type="tel"
//     value={mobile}
//     onChange={(e) => setMobile(e.target.value)}
//     />
//     </div>
//     <div className="form-group">
//     <label>Birthday date</label>
//     <input
//     type="date"
//     value={Date}
//     onChange={(e) => setDate(e.target.value)}
//     />
//     </div>
    
//     <div className="form-group">
//     <center>
//     <button type="button" onClick={handleSignup}>
//     Book
//     </button>
//     </center>
//     </div>
//     {error && <div className="error-message">{error}</div>}
//     </form>
//     </div>
//     </div>
//     );
// };

// export default Booking;
import React, { useState } from 'react';
import UserNavbar from '../component/UserNavbar';
import'../pages/Booking.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [eventname, setEventname] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [foodSelection, setFoodSelection] = useState([]);
  const [activitySelection, setActivitySelection] = useState([]);
  const [danceSelection, setDanceSelection] = useState([]);
  const [additionalDescription, setAdditionalDescription] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (
      email &&
      username &&
      mobile &&
      eventname &&
      birthdayDate &&
      cpassword &&
      (foodSelection.length > 0 || activitySelection.length > 0 || danceSelection.length > 0)
    ) {
      setError('');
      console.log('Booking done successfully!');
    } else {
      setError('Please fill in all the required fields.');
    }
  };

  return (
    <div>
      <UserNavbar />
      <br></br>
      <br></br>
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
              value={birthdayDate}
              onChange={(e) => setBirthdayDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Food Selection:</label>
            <select
              multiple
              value={foodSelection}
              onChange={(e) => setFoodSelection(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
              <option value="Kid Package">Kid Package</option>
              <option value="Teen Pakage">Teen Pakage</option>
              <option value="Adult Pakage">Adult Pakage</option>
            </select>
          </div>
          <div className="form-group">
            <label>Activity Selection:</label>
            <select
              multiple
              value={activitySelection}
              onChange={(e) => setActivitySelection(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
              <option value="k">Kid Package</option>
              <option value="T">Teen Pakage</option>
              <option value="A">Adult Pakage</option>
            </select>
          </div>
          <div className="form-group">
            <label>Dance Selection:</label>
            <select
              multiple
              value={danceSelection}
              onChange={(e) => setDanceSelection(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
              <option value="hip-hop">DJ Music</option>
              <option value="salsa">Dance Floor</option>
              <option value="ballet">Disco Lights</option>
              <option value="ballet">Party Games</option>
              <option value="ballet">Professional Dancers</option>
            </select>
          </div>
          <div className="form-group">
            <label>Additional Description:</label>
            <textarea
              value={additionalDescription}
              onChange={(e) => setAdditionalDescription(e.target.value)}
            ></textarea>
          </div>
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
