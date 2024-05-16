const gameModel = require('../models/gameModel');

const getAllGames = (req, res) => {
  const games = gameModel.getAllGames();
  res.json(games);
};

const getGameById = (req, res) => {
  const id = req.params.id;
  const game = gameModel.getGameById(id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
};

const getGamesByUser = (req, res) => {
  const user = req.params.user;
  const games = gameModel.getGamesByUser(user);
  if (games.length > 0) {
    res.json(games);
  } else {
    res.status(404).json({ error: 'Games not found for this user' });
  }
};

const saveGame = (req, res) => {
  const { user, game, points } = req.body;
  if (!user || !game || !points) {
    return res.status(400).json({ error: 'Please provide user, game and points' });
  }
  const newGame = gameModel.saveGame({ user, game, points });
  res.status(201).json(newGame);
};

const updateGameById = (req, res) => {
  const id = req.params.id;
  const { user, game, points } = req.body;
  const updatedGame = gameModel.updateGameById(id, { user, game, points });
  if (updatedGame) {
    res.json(updatedGame);
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
};

const deleteGameById = (req, res) => {
  const id = req.params.id;
  const deletedGame = gameModel.deleteGameById(id);
  if (deletedGame) {
    res.json(deletedGame);
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  getGamesByUser,
  saveGame,
  updateGameById,
  deleteGameById
};
