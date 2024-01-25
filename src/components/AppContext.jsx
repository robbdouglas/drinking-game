import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    randomPlayer: null,
    categories: null,
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

  return (
    <AppContext.Provider
      value={{ ...appState, setRandomPlayer, setCategories, setCategory }}
    >
      {children}
    </AppContext.Provider>
  );
};
