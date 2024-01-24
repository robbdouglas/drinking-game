// Task.jsx

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Task.css";
import drinkTasks from "../data/drink-tasks";
import drinkHardTasks from "../data/drink-hard-tasks";
import finishDrinkTasks from "../data/finish-drink-tasks";
import truthTasks from "../data/truth-tasks";
import dareTasks from "../data/dare-tasks";
import sexyTasks from "../data/sexy-tasks";
import drinkDriver from "../data/drink-driver";

function Task() {
  const location = useLocation();
  const randomPlayer = location.state && location.state.randomPlayer;
  const category = location.state && location.state.category;

  const [currentTask, setCurrentTask] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getRandomTask = () => {
      let tasksForCategory = [];

      switch (category) {
        case "Saufen":
          tasksForCategory = drinkTasks;
          break;
        case "Hart Saufen":
          tasksForCategory = drinkHardTasks;
          break;
        case "Exen":
          tasksForCategory = finishDrinkTasks;
          break;
        case "Wahrheit":
          tasksForCategory = truthTasks;
          break;
        case "Pflicht":
          tasksForCategory = dareTasks;
          break;
        case "Sexy":
          tasksForCategory = sexyTasks;
          break;
        case "Lass andere saufen":
          tasksForCategory = drinkDriver;
          break;
        // Hier weitere Cases für andere Kategorien hinzufügen

        default:
          // Standardfall: Verwende den Saufen-Pool
          tasksForCategory = drinkTasks;
      }

      const randomIndex = Math.floor(Math.random() * tasksForCategory.length);
      const selectedTask = tasksForCategory[randomIndex];

      setCurrentTask(selectedTask);
    };

    getRandomTask();
  }, [category]);

  const handleBackToHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="task-counter-container">
        <p className="task-counter">Aufgabe 1/30</p>
      </div>
      <p className="task">{randomPlayer}</p>
      <p className="task">{currentTask && currentTask.text}</p>
      <button className="task-completed-btn">
        Aufgabe gemeistert, weiter geht's!
      </button>
      <button className="settings-btn">Menü</button>
      <button className="reroll-task">Aufgabe überspringen</button>
      <div className="reroll-counter">3</div>
      <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
        Spiel beenden
      </button>
    </div>
  );
}

export default Task;
