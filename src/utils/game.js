import { drinkerCategories, nonDrinkerCategories } from "../data/categories";

export const getRandomPlayer = (newAllPlayers) => {
  return newAllPlayers[Math.floor(Math.random() * newAllPlayers.length)];
};

export const getPlayerCategories = (player) => {
  const categories = drinkerInputs.includes(player)
    ? drinkerCategories
    : nonDrinkerCategories;
  return categories;
};
