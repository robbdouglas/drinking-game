// Task.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Task.css";

function Task() {
  const location = useLocation();
  const randomPlayer = location.state && location.state.randomPlayer;
  const category = location.state && location.state.category;

  return (
    <div>
      <div className="task-counter-container">
        <p className="task-counter">Aufgabe 1/30</p>
      </div>
      <p className="task">
        {randomPlayer} muss eine Aufgabe der Kategorie "{category}" bewältigen!
      </p>
      <button className="task-completed-btn">
        Aufgabe gemeistert, weiter geht's!
      </button>
      <button className="settings-btn">Menü</button>
      <button className="reroll-task">Aufgabe überspringen</button>
      <div className="reroll-counter">3</div>
      <button className="finish-game">Spiel beenden</button>
    </div>
  );
}

export default Task;
