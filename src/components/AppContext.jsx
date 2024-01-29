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

  return (
    <AppContext.Provider
      value={{
        ...appState,
        setRandomPlayer,
        setCategories,
        setCategory,
        setAllPlayers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
