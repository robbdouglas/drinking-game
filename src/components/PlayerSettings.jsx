// PlayerSettings.jsx

import "../styles/PlayerSettings.css";
import { useNavigate } from "react-router-dom";

function PlayerSettings() {
  const navigate = useNavigate();

  const handleBackToHomeButtonClick = () => {
    navigate("/");
  };

  const handleStartGameButtonClick = () => {
    // Hier kannst du zusätzliche Logik hinzufügen, bevor zur PlayerSettings-Seite navigiert wird
    navigate("/categories");
  };

  return (
    <div>
      <table>
        <tr>
          <th>
            <h2>Trinker</h2>
          </th>
          <th>
            <h2>Nicht-Trinker / Fahrer</h2>
          </th>
        </tr>
        <tr>
          <td>
            <button>+</button>
          </td>
          <td>
            <button>+</button>
          </td>
        </tr>
      </table>
      <button onClick={handleStartGameButtonClick}>SPIEL STARTEN</button>
      <button>Menü</button>
      <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
        Zurück zur Startseite
      </button>
    </div>
  );
}

export default PlayerSettings;
