import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">Über uns</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testfeedback</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Video</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2020 Net-Future GmbH. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
