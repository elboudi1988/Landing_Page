import React, { useState } from "react";
import "./Hero.css";
import ContactPopup from "./contactpopup";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleEditClick = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };
  function handleClose() {
    setShowPopup(false);
  }

  function handleSave() {
    setShowPopup(false);
  }

  return (
    <>
      <div className="hero">
        <div className="content">
          <p>Ruf uns an</p>
          <p>0800 800 200</p>
          <p>IT Problem Solver</p>
          <p>rund um die uhr verfügbar</p>
          <button href="/" className="button" onClick={handleEditClick}>
            Anfrage
          </button>
        </div>
      </div>
      {showPopup && <ContactPopup onClose={handleClose} onSave={handleSave} />}
    </>
  );
};

export default Hero;
