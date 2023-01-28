import React, { useState } from "react";
import axios from "axios";
import "./contactpopup.css";

const ContactPopup = (props) => {
  const [message, setMessage] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    nachricht: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/helfen", formData)
      .then((res) => {
        setMessage(res.data.message);
        props.onClose();
      })
      .catch((err) => console.log(err));
  };
  function handleClose() {
    // Close the popup without saving
    props.onClose(false);
  }
  console.log(message);
  return (
    <div className="overlay">
      <div className="edit-popup">
        {
          <div className="popup-modal">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Nachname:
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Nachricht:
                <textarea
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Senden</button>
              <button onClick={handleClose}>Schließn</button>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default ContactPopup;
