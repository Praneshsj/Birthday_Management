import React from "react";
import facebook from "../assets/photo/facebook.png"
import twitter from "../assets/photo/twitter.png";
import '../pages/Footer.css'


export default function Footer() {
  return (
    <div className="ffull">
      <div className="fsub">
        <div className=" fsub1">
          <p className="fsub2">SJP Celebration</p>
          <p className="fsub3">Personalized birthday event planning service</p>
          <p className="fsub4">
          Transform your celebrations with us. We specialize in creating
            unforgettable birthday experiences, tailored to your preferences.
            From themes to activities, we make every moment a cherished memory.
          </p>
        </div>
        <div className=" fub5">
          <p className="fsub6">Get updated</p>
          <p className="fsub7">
          Stay ahead with the latest updates and exclusive offers from SJP Celebration
          </p>
          <div className="fsub8">
            <img src={facebook} alt="" className="fsub9" />
            
            <img src={twitter} alt="" className="fsub10" />
          </div>
          <div className="fsub11">
            <input
              type="text"
              placeholder="Type your email"
              className="fsub12"
            />
            &nbsp;
            <button className="fsub13">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}