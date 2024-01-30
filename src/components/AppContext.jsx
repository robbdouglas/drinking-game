// AppContext.jsx
import React, { createContext, useContext, useState } from "react";
import { allCategories } from "../data/categories";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    allPlayers: [],
    randomPlayer: null,
    categories: allCategories,
    category: null,
    drinkerInputs: [],
    nonDrinkerInputs: [],
  });

  const setRandomPlayer = (randomPlayer) => {
    setAppState((prevState) => ({ ...prevState, randomPlayer }));
  };

  const setCategories = (categories) => {
    setAppState((prevState) => ({ ...prevState, categories }));
  };

  const setCategory = (category) => {
    setAppState((prevState) => ({ ...prevState, category }));
  };

  const setAllPlayers = (allPlayers) => {
    setAppState((prevState) => ({ ...prevState, allPlayers }));
  };

  const setDrinkerInputs = (drinkerInputs) => {
    setAppState((prevState) => ({ ...prevState, drinkerInputs }));
  };

  const setNonDrinkerInputs = (nonDrinkerInputs) => {
    setAppState((prevState) => ({ ...prevState, nonDrinkerInputs }));
  };

  return (
    <AppContext.Provider
      value={{
        ...appState,
        setRandomPlayer,
        setCategories,
        setCategory,
        setAllPlayers,
        setDrinkerInputs,
        setNonDrinkerInputs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
