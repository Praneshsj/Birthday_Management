// import React from 'react'

// function Contact() {
//   return (
//     <h1>Contact</h1>
//   )
// }

// export default Contact
import React, { useState } from "react";
import Navbar from '../component/Navbar'
import './Contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add logic here to handle form submission, such as sending data to a server

    // For now, let's just display the submitted data in the console
    console.log(formData);
  };

  return (
    <div className="Contact">
      <Navbar />
      <br />
      <div className=" contactfull">
      <h1>Contact us!</h1>
      <div className="con">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        
        </div>
       
    </div>
    </div>
  );
}

export default Contact;