const Product = require('../models/product')
exports.getAllProduct = async (req, res, next) => {
  const prod = await Product.findAll();
  console.log(prod)
  res.status(200).json(prod)
}
exports.save = async (req, res, next) => {
  try {
    const prod = req.body;
    const newProd = await new Product(null,prod.name,prod.price,prod.model,prod.rating,prod.manufacturer,prod.description).save()
    res.status(201).json(newProd);
  } catch (err) {
    next(err)
  }
}
exports.getById = async (req, res, next) => {
  try {
    const prod = await Product.findById(req.params.id)
    res.status(200).json(prod);
  } catch (err) {
    next(err);
  }
}
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const prod = req.body;
    console.log(req.body)
    const updateProd = new Product(id,prod.name,prod.price,prod.model,prod.rating,prod.manufacturer,prod.description,prod.reviews);
    await updateProd.update()
    res.status(200).json(updateProd)
  } catch (err) {
    next(err)
  }
}
exports.updateReview = async (req, res, next) => {
  try {
    const id = req.params.id;
    const prod = req.body;
    console.log(req.body)
    const updateProd = new Product(id,prod.name,prod.price,prod.model,prod.rating,prod.manufacturer,prod.description,prod.reviews);
    await updateProd.updateReviw()
    res.status(200).json(updateProd)
  } catch (err) {
    next(err)
  }
}
exports.delete = async (req, res, next) => {
  try {
  let result=  await Product.deleteById(req.params.id)
    res.status(200).json({result })
  } catch (err) {
    next(err)
  }
}


