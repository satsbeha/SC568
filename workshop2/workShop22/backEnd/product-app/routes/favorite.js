const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController')
router.get('/', favoriteController.getAllFavoriteMovie)
router.post('/',  favoriteController.save)
router.delete('/:id', favoriteController.remove)
module.exports = router;