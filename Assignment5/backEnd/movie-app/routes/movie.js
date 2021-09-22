const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController')
//const userController=require('../controllers/userController')
router.get('/', movieController.getAllMovie)
router.get('/:id', movieController.getById)
router.post('/',  movieController.save)
router.put('/:id', movieController.update)
router.delete('/:id', movieController.delete)
module.exports = router;