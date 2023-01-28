import React from "react";
import john from "./images/john-doe.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Net-Future GmbH ist ein Unternehmen für Systemintegration mit
            Hauptsitz in Hagen, Deutschland. Sie spezialisieren sich auf die
            Gestaltung und Umsetzung von IT-Lösungen für Unternehmen, wie
            Netzwerke, Softwareentwicklung und Cloud Computing. Sie arbeiten mit
            Kunden aus verschiedenen Branchen und bieten fortlaufenden Support
            und Wartung an. Sie sind bestrebt, Unternehmen im digitalen
            Zeitalter zum Erfolg zu verhelfen.
          </p>
          <p>
            Ich bin Jana Schlaumeier, die Inhaberin von Net-Future GmbH, ein
            Unternehmen für Systemintegration mit langjähriger Erfahrung. Wir
            bieten qualitativ hochwertige IT-Lösungen und ständig verbessern
            unsere Fähigkeiten und Wissen für die bestmögliche Unterstützung
            unserer Kunden.
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
