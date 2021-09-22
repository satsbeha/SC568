const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')
//const userController=require('../controllers/userController')
router.get('/', studentController.getAllStudent)
router.get('/:id', studentController.getById)
router.post('/',  studentController.save)
router.put('/:id', studentController.update)
router.delete('/:id', studentController.delete)
module.exports = router;