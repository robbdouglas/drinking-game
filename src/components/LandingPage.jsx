// LandingPage.jsx

import { Link, useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    // Hier kannst du zusätzliche Logik hinzufügen, bevor zur PlayerSettings-Seite navigiert wird
    navigate("/player-settings");
  };

  return (
    <div>
      <h1>Schluck mit lustig</h1>
      <button onClick={handleStartButtonClick}>Start</button>
      <h3>Regeln:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>
      <button className="settings-btn">Menü</button>
    </div>
  );
}

export default LandingPage;
