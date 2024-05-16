const { v4: uuidv4 } = require('uuid');

let games = [
  { id: uuidv4(), user: 'Ruth Suarez', game: 'Pac-Man', points: 1000 },
  { id: uuidv4(), user: 'Fernando Suarez', game: 'Tetris', points: 3500 }
];

const getAllGames = () => games;

const getGameById = (id) => games.find(game => game.id === id);

const getGamesByUser = (user) => games.filter(game => game.user === user);

const saveGame = (game) => {
  game.id = uuidv4();
  games.push(game);
  return game;
};

const updateGameById = (id, updatedGame) => {
  const index = games.findIndex(game => game.id === id);
  if (index !== -1) {
    games[index] = { id, ...updatedGame };
    return games[index];
  }
  return null;
};

const deleteGameById = (id) => {
  const index = games.findIndex(game => game.id === id);
  if (index !== -1) {
    const deletedGame = games[index];
    games = games.filter(game => game.id !== id);
    return deletedGame;
  }
  return null;
};

module.exports = {
  getAllGames,
  getGameById,
  getGamesByUser,
  saveGame,
  updateGameById,
  deleteGameById
};
