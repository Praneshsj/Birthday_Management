import React, { useState } from 'react';
import '../pages/Loginn.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../component/Navbar';


const Loginn = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email:"",
    password:""
  });

  const { email,password} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  if(email==="admin@gmail.com" && password==="Admin@123" )
  {
    navigate("/admin");
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/api/v1/auth/login", user);
      navigate("/");
    
  };


  return (
    <>
    <Navbar/>
    <br></br>
    <div className="login_container">
      <h2>Login</h2>
      {/* {errorMessage && <p className="error_message">{errorMessage}</p>} */}
      <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="username">Email:</label>
      <input
        type={"email"} required
        id="email"
        name='email'
        placeholder='abc@gamil.com'
        value={email}
        onChange={(e) => onInputChange(e)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type={"password"}
        id="password"
        name="password"
        placeholder='Password..'
        value={password}
        onChange={(e) => onInputChange(e)}
      />

      <div className="not_ref">
        <p>Not Registered? &nbsp;<a href='/signup'>Create a account</a></p>
      </div>
      <button>Login</button>
      </form>
    </div>
    </>
  );
};

export default Loginn;