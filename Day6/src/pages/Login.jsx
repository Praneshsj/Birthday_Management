// import React from 'react'

// function Login() {
//   return (
//     <h1>LOGIN</h1>
//   )
// }

// export default Login
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import '../assets/css/Login.css';
// import Navbar from '../component/Navbar'
// import Register from './Register';
// import { Navigate, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate=useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     if (username && password) {
//       setError('');
//       console.log('Login successful!');
//     } else {
//       setError('Please enter both username and password.');
//     }
//   };
//   const handleNav=()=>
//   {
//     console.log("9")
//     navigate("/Register");
//   }

//   return (
//     <div>
//       <Navbar/>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <div className="login-container">
//     <center>
//     <br></br>
//     <h2>Login</h2>
//     </center>
//       <form>
//         <div className="form-group">
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             />
//             </div>
//             <div className="form-group">
//             <label>Password:</label>
//             <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             </div>
//             <div className="form-group">
//             <br></br>
//             <center>
//             <button type="button" >
//             <Link to = "/user">Login</Link>
            
//             </button>&nbsp;
//             <button type="button">
//             <Link to = "/Register">Register</Link>
            
//             </button>
//             </center>
//             <br></br>
//             </div>
//             {error && <div className="error-message">{error}</div>}
//             </form>
//             </div>
//             </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import Navbar from '../component/Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setError('');
      // Redirect to the user profile or dashboard after successful login
      navigate('/user');
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="login-container">
        <center>
          <br />
          <h2>Login</h2>
        </center>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <br />
            <center>
              <button type="button" onClick={handleLogin}>
                
                Login
              </button>
              &nbsp;
              <button type="button">
                <Link to="/Register">Register</Link>
              </button>
            </center>
            <br />
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
