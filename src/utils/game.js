export const getRandomPlayer = (newAllPlayers) => {
    return newAllPlayers[Math.floor(Math.random() * newAllPlayers.length)];
  };