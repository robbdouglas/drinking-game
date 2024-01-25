// PlayerSettings.jsx

import React, { useState } from "react";
import "../styles/PlayerSettings.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";

function PlayerSettings() {
  const navigate = useNavigate();
  const { setRandomPlayer, setCategories } = useAppContext(); // Nutze den Kontext

  const [drinkerInputs, setDrinkerInputs] = useState([]);
  const [nonDrinkerInputs, setNonDrinkerInputs] = useState([]);
  const [maxPlayersReached, setMaxPlayersReached] = useState(true);
  const [showMaxPlayersMessage, setShowMaxPlayersMessage] = useState(false);

  const handleBackToHomeButtonClick = () => {
    navigate("/");
  };

  const handleStartGameButtonClick = () => {
    setMaxPlayersReached(false);

    // Überprüfe, ob mindestens ein Inputfeld vorhanden ist
    const hasInputs = drinkerInputs.length > 0 || nonDrinkerInputs.length > 0;

    // Überprüfe, ob alle Inputfelder ausgefüllt sind
    const allFieldsFilled =
      drinkerInputs.every((inputObj) => inputObj.value.trim() !== "") &&
      nonDrinkerInputs.every((inputObj) => inputObj.value.trim() !== "");

    if (!hasInputs || !allFieldsFilled) {
      setMaxPlayersReached(true);
    } else {
      // Zufälligen Spieler auswählen
      const allPlayers = [...drinkerInputs, ...nonDrinkerInputs];
      const randomPlayer =
        allPlayers[Math.floor(Math.random() * allPlayers.length)];

      // Unterscheide zwischen Trinkern und Nicht-Trinkern
      const categories = drinkerInputs.includes(randomPlayer)
        ? ["Saufen", "Hart Saufen", "Exen", "Wahrheit", "Pflicht", "Sexy"]
        : ["Wahrheit", "Pflicht", "Sexy", "Lass andere saufen"];

      // Hier den Kontext aktualisieren
      setRandomPlayer(randomPlayer.value);
      setCategories(categories);

      navigate("/categories");
    }
  };

  const handleInputChange = (inputType, id, value) => {
    if (inputType === "drinker") {
      setDrinkerInputs((prevInputs) =>
        prevInputs.map((input) =>
          input.id === id ? { ...input, value } : input
        )
      );
    } else if (inputType === "nonDrinker") {
      setNonDrinkerInputs((prevInputs) =>
        prevInputs.map((input) =>
          input.id === id ? { ...input, value } : input
        )
      );
    }
  };

  const handleAddInput = (inputType) => {
    const setInputs =
      inputType === "drinker" ? setDrinkerInputs : setNonDrinkerInputs;

    if (drinkerInputs.length + nonDrinkerInputs.length < 8) {
      setInputs((prevInputs) => [
        ...prevInputs,
        {
          id: prevInputs.length,
          input: (
            <input
              key={prevInputs.length}
              type="text"
              placeholder="Gib deinen Namen ein..."
              onChange={(e) =>
                handleInputChange(inputType, prevInputs.length, e.target.value)
              }
            />
          ),
          value: "", // Initialer Wert ist leer
        },
      ]);
    } else {
      setMaxPlayersReached(true);
      setShowMaxPlayersMessage(true);
    }
  };

  const handleRemoveInput = (inputType, id) => {
    const setInputs =
      inputType === "drinker" ? setDrinkerInputs : setNonDrinkerInputs;

    setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));

    // Überprüfe, ob die Anzahl der Inputfelder genau 8 beträgt
    if (
      maxPlayersReached &&
      drinkerInputs.length + nonDrinkerInputs.length === 8
    ) {
      setMaxPlayersReached(false);
      setShowMaxPlayersMessage(false);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Trinker</h2>
            </th>
            <th>
              <h2>Nicht-Trinker / Fahrer</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                className="add-drinker-btn"
                onClick={() => handleAddInput("drinker")}
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
                onClick={() => handleAddInput("nonDrinker")}
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
        </tbody>
      </table>
      {maxPlayersReached && (
        <p>
          {drinkerInputs.length + nonDrinkerInputs.length === 0
            ? "Bitte füge mindestens einen Spieler hinzu"
            : "Jedem Spieler muss ein Name zugewiesen werden!"}
        </p>
      )}
      {showMaxPlayersMessage && (
        <p>
          Die maximale Spielerzahl beträgt 8. Du kannst keinen weiteren Spieler
          hinzufügen!
        </p>
      )}
      <button
        onClick={handleStartGameButtonClick}
        disabled={
          !(drinkerInputs.length > 0 || nonDrinkerInputs.length > 0) ||
          !(
            drinkerInputs.every((input) => input.value.trim() !== "") &&
            nonDrinkerInputs.every((input) => input.value.trim() !== "")
          )
        }
      >
        SPIEL STARTEN
      </button>
      <button className="settings-btn">Menü</button>
      <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
        Zurück zur Startseite
      </button>
    </div>
  );
}

export default PlayerSettings;
