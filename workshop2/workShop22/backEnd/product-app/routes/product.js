const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
//const userController=require('../controllers/userController')
router.get('/', productController.getAllProduct)
router.get('/:id', productController.getById)
router.post('/',  productController.save)
router.put('/:id', productController.update)
router.put('/:id/review', productController.updateReview)
router.delete('/:id', productController.delete)
module.exports = router;