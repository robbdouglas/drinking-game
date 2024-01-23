// LandingPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [showRules, setShowRules] = useState(false);

  const handleStartButtonClick = () => {
    // Hier kannst du zusätzliche Logik hinzufügen, bevor zur PlayerSettings-Seite navigiert wird
    navigate("/player-settings");
  };

  const handleToggleRules = () => {
    setShowRules((prevShowRules) => !prevShowRules);
  };

  return (
    <div>
      <h1>Schluck mit lustig</h1>
      <button onClick={handleStartButtonClick}>Start</button>
      <div className="toggle-rules-btn-container">
        <button onClick={handleToggleRules}>
          {showRules ? "Regeln ausblenden" : "Regeln anzeigen"}
        </button>
      </div>
      {showRules && (
        <div>
          <h3>Regeln:</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Horrido, ihr suffelwütigen Knallerbsen!</li>
            <li>
              Seid ihr euch sicher, dass ihr dieses gefährliche Spiel spielen
              wollt, so klickt auf den "Start" Button!
            </li>
            <li>
              Überlegt anschließend, ob ihr während des Spiels Alkohol trinken
              möchtet oder nicht oder ob ihr sogar der arme Fahrer seid (RIP).
            </li>
            <li>
              Um einen neuen Spieler hinzuzufügen, klickt jeweils auf den "+"
              Button und tragt eure Namen ein!
            </li>
            <li>
              Anschließend wird per Zufall ausgelost, wer von euch eine Aufgabe
              bewältigen muss.
            </li>
            <li>
              Der aktive Spieler muss sich nun für eine Kategorie entscheiden.
            </li>
            <li>
              Gut für Nicht-Trinker: Ihr dürft gern dennoch die Kategorien
              wählen, in denen getrunken wird. Hier bekommt ihr allerdings
              Aufgaben, die ihr lösen müsst, um Schlücke an Mitspieler zu
              verteilen!
            </li>
            <li>
              Erfüllt dann die Anforderungen der Aufgabe und klickt auf den
              "Aufgabe gemeistert" Button, wenn ihr damit fertig seid.
            </li>
            <li>
              Habt ihr keine Lust auf eine bestimmte Aufgabe, habt ihr insgesamt
              drei Joker, die es euch erlauben, eine Aufgabe zu überspringen.
            </li>
            <li>
              Nach genau 30 Aufgaben ist das Spiel beendet und ihr seid
              vermutlich betrunkener als vorher!
            </li>
          </ul>
        </div>
      )}
      <button className="settings-btn">Menü</button>
    </div>
  );
}

export default LandingPage;
