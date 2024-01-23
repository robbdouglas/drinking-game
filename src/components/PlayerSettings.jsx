// PlayerSettings.jsx

import React, { useState } from "react";
import "../styles/PlayerSettings.css";
import { useNavigate } from "react-router-dom";

function PlayerSettings() {
  const navigate = useNavigate();
  const [drinkerInputs, setDrinkerInputs] = useState([]);
  const [nonDrinkerInputs, setNonDrinkerInputs] = useState([]);
  const [maxPlayersReached, setMaxPlayersReached] = useState(false);

  const handleBackToHomeButtonClick = () => {
    navigate("/");
  };

  const handleStartGameButtonClick = () => {
    // Hier kannst du zusätzliche Logik hinzufügen, bevor zur PlayerSettings-Seite navigiert wird
    navigate("/categories");
  };

  const handleAddDrinkerButtonClick = () => {
    if (drinkerInputs.length + nonDrinkerInputs.length < 8) {
      setDrinkerInputs((prevInputs) => [
        ...prevInputs,
        {
          id: prevInputs.length,
          input: (
            <input
              key={prevInputs.length}
              type="text"
              placeholder="Gib deinen Namen ein..."
            />
          ),
        },
      ]);
    } else {
      setMaxPlayersReached(true);
    }
  };

  const handleAddNonDrinkerButtonClick = () => {
    if (drinkerInputs.length + nonDrinkerInputs.length < 8) {
      setNonDrinkerInputs((prevInputs) => [
        ...prevInputs,
        {
          id: prevInputs.length,
          input: (
            <input
              key={prevInputs.length}
              type="text"
              placeholder="Gib deinen Namen ein..."
            />
          ),
        },
      ]);
    } else {
      setMaxPlayersReached(true);
    }
  };

  const handleRemoveInput = (inputType, id) => {
    if (inputType === "drinker") {
      setDrinkerInputs((prevInputs) =>
        prevInputs.filter((input) => input.id !== id)
      );
    } else if (inputType === "nonDrinker") {
      setNonDrinkerInputs((prevInputs) =>
        prevInputs.filter((input) => input.id !== id)
      );
    }

    // Überprüfe, ob die Anzahl der Inputfelder genau 8 beträgt
    if (
      maxPlayersReached &&
      drinkerInputs.length + nonDrinkerInputs.length === 8
    ) {
      setMaxPlayersReached(false);
    }
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
            <button
              className="add-drinker-btn"
              onClick={handleAddDrinkerButtonClick}
            >
              +
            </button>
            {drinkerInputs.map((inputObj) => (
              <div key={inputObj.id}>
                {inputObj.input}
                <button
                  onClick={() => handleRemoveInput("drinker", inputObj.id)}
                >
                  {" "}
                  -{" "}
                </button>
              </div>
            ))}
          </td>
          <td>
            <button
              className="add-non-drinker-driver-btn"
              onClick={handleAddNonDrinkerButtonClick}
            >
              +
            </button>
            {nonDrinkerInputs.map((inputObj) => (
              <div key={inputObj.id}>
                {inputObj.input}
                <button
                  onClick={() => handleRemoveInput("nonDrinker", inputObj.id)}
                >
                  {" "}
                  -{" "}
                </button>
              </div>
            ))}
          </td>
        </tr>
      </table>
      {maxPlayersReached &&
        drinkerInputs.length + nonDrinkerInputs.length === 8 && (
          <p>Die maximale Spielerzahl beträgt 8 Spieler!</p>
        )}
      <button onClick={handleStartGameButtonClick}>SPIEL STARTEN</button>
      <button>Menü</button>
      <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
        Zurück zur Startseite
      </button>
    </div>
  );
}

export default PlayerSettings;
