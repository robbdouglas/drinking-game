// Task.jsx

import "../styles/Task.css";

function Task() {
  return (
    <div>
      <div className="task-counter-container">
        <p className="task-counter">Aufgabe 1/30</p>
      </div>
      <p className="task">
        Melle muss 3 Schlucke trinken, wenn sie heute bereits Kaffee getrunken hat!
      </p>
      <button className="task-completed-btn">Aufgabe gemeistert, weiter geht's!</button>
      <button className="settings-btn">Menü</button>
      <button className="reroll-task">Aufgabe überspringen</button>
      <div className="reroll-counter">3</div>
      <button className="finish-game">Spiel beenden</button>
    </div>
  );
}

export default Task;
