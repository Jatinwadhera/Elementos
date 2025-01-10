import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logoa">
        <span className="logo-event">EVENT</span>
        <span className="logo-x">X</span>
      </div>
      <ul className="navbars-links">
        <li>HOME</li>
        <li>EVENTS</li>
        <li>SCHEDULE</li>
        <li>VENUE</li>
      </ul>
      <div className="navbar-contact">
        <span>CONTACT US</span>
        <div className="contact-icon">✉</div>
      </div>
    </nav>
  );
};

export default Navbar;
