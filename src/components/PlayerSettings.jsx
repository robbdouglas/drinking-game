// PlayerSettings.jsx

import "../styles/PlayerSettings.css";
import { useNavigate } from "react-router-dom";

function PlayerSettings() {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
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
      <button onClick={handleStartGameButtonClick}>START GAME</button>
      <button>Menü</button>
      <button className="back-to-home" onClick={handleStartButtonClick}>
        Zurück zur Startseite
      </button>
    </div>
  );
}

export default PlayerSettings;
