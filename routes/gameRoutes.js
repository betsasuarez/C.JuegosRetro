const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getAllGames);
router.get('/:id', gameController.getGameById);
router.get('/user/:user', gameController.getGamesByUser);
router.post('/', gameController.saveGame);
router.put('/:id', gameController.updateGameById);
router.delete('/:id', gameController.deleteGameById);

module.exports = router;
