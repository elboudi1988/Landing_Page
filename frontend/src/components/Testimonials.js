import React from "react";
import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>feedback</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              Net-Future GmbH hat uns bei der Lösung unserer IT-Probleme schnell
              und effektiv geholfen. Ihre erfahrenen Mitarbeiter haben uns durch
              die gesamte Prozess begleitet und uns eine maßgeschneiderte Lösung
              geliefert. Wir sind sehr zufrieden mit dem Ergebnis und empfehlen
              das Unternehmen gerne weiter.
            </p>
            <p>
              <span>Johnson.M.J.</span>
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user2} alt="user1" />
            <p>
              Net-Future GmbH hat uns bei der Modernisierung unserer
              IT-Infrastruktur sehr unterstützt. Sie haben uns geholfen, unsere
              Prozesse zu automatisieren und die Zusammenarbeit im Unternehmen
              zu verbessern. Wir schätzen die Professionalität und das
              Engagement des Teams sehr und werden sie auch in Zukunft für
              weitere Projekte beauftragen.
            </p>
            <p>
              <span>Carol Harper</span>
            </p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>
          <div className="card">
            <img src={user3} alt="user1" />
            <p>
              Net-Future GmbH hat uns bei der Implementierung von
              Cloud-Technologien sehr geholfen. Sie haben uns durch den gesamten
              Prozess begleitet und uns gezeigt, wie wir unsere Datensicherheit
              und die Zugänglichkeit unserer Daten verbessern können. Wir sind
              sehr zufrieden mit der Zusammenarbeit und empfehlen das
              Unternehmen gerne weiter.
            </p>
            <p>
              <span>Snow.J.R.</span>
            </p>
            <p>Managing Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
