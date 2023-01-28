import React, { useState } from "react";
import ContactPopup from "./contactpopup";
import "./Demo.css";

const Demo = () => {
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
    <div className="demo" id="demo">
      {showPopup && <ContactPopup onClose={handleClose} onSave={handleSave} />}
      <div className="container">
        <div className="col-1">
          <p>mehr als 100 Kunden,</p>
          <p>und nur ein Ziel </p>
          <p>
            Unsere Kunden sind sehr zufrieden mit den von uns gelieferten
            IT-Lösungen. Sie schätzen unsere Erfahrung und unsere Fähigkeit,
            ihre Probleme schnell und effektiv zu lösen. Unser Ziel ist es, die
            Zufriedenheit unserer Kunden sicherzustellen und wir erhalten viele
            positive Rückmeldungen und Empfehlungen.
          </p>
          <button className="button" onClick={handleEditClick}>
            Holen Sie sich Ihre kostenlose beratung{" "}
          </button>
        </div>
        <div className="col-2">
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/embed/nDCt6fUE9-o"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
