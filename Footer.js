import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="navbar-logo">
        <span className="logo-event">EVENT</span>
        <span className="logo-x">X</span>
      </div>

      <h1>SUBSCRIBE TO 
        OUR NEWSLETTER</h1>

      <div className="subscribe">
        <input type="email" placeholder="Enter Your Email" className="email-input" />
        <button className="subscribe-button">
          <span className="circle-arrow">→</span>
        </button>
      </div>

      <ul className="footer-links">
        <li>HOME</li>
        <li>EVENTS</li>
        <li>SCHEDULE</li>
        <li>VENUE</li>
      </ul>

      <div className="social-icons">
        <i className="icon instagram">Instagram</i>
        <i className="icon facebook">Facebook</i>
        <i className="icon twitter">Twitter</i>
        <i className="icon tiktok">TikTok</i>
      </div>

      <hr />

      <div className="container-terms">
        <p>@2024 Beta, All Rights Reserved</p>
        <p>Terms & Agreements</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
