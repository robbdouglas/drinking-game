// Task.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Task.css";
import drinkTasks from "../data/drink-tasks";
import drinkHardTasks from "../data/drink-hard-tasks";
import finishDrinkTasks from "../data/finish-drink-tasks";
import truthTasks from "../data/truth-tasks";
import dareTasks from "../data/dare-tasks";
import sexyTasks from "../data/sexy-tasks";
import drinkDriver from "../data/drink-driver";
import { useAppContext } from "./AppContext";
import { getRandomPlayer } from "../utils/game";

function Task() {
  const navigate = useNavigate();
  const {
    randomPlayer,
    category,
    setRandomPlayer,
    setAllPlayers,
    allPlayers,
    setCategories,
    setCategory,
  } = useAppContext();

  const [currentTask, setCurrentTask] = useState(null);
  const [rerollCounter, setRerollCounter] = useState(3);

  useEffect(() => {
    getRandomTask();
  }, [category]);

  console.log(category);

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

  const handleBackToHomeButtonClick = () => {
    navigate("/");
  };

  const handleRerollButtonClick = () => {
    if (rerollCounter > 0) {
      setRerollCounter(rerollCounter - 1);
      getRandomTask();
    }
  };

  const handleTaskCompletedButtonClick = () => {
    const newAllPlayers = [...allPlayers];
    const newRandomPlayer = getRandomPlayer(newAllPlayers);
    setRandomPlayer(newRandomPlayer.value);

    navigate("/categories");
  };

  return (
    <div>
      <div className="task-counter-container">
        <p className="task-counter">Aufgabe 1/30</p>
      </div>
      <p className="task">{randomPlayer}</p>
      <p className="task">{currentTask && currentTask.text}</p>
      <button
        className="task-completed-btn"
        onClick={handleTaskCompletedButtonClick}
      >
        Aufgabe gemeistert, weiter geht's!
      </button>
      <button className="settings-btn">Menü</button>
      <button
        className="reroll-task"
        onClick={handleRerollButtonClick}
        disabled={rerollCounter === 0}
      >
        Aufgabe überspringen
      </button>
      <div className="reroll-counter">{rerollCounter}</div>
      <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
        Spiel beenden
      </button>
    </div>
  );
}

export default Task;
