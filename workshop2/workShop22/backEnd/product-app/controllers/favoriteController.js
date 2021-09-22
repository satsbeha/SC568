const FavoriteMovie = require('../models/favorite')
exports.getAllFavoriteMovie = async (req, res, next) => {
  const favorites = await FavoriteMovie.findAll();;
  res.status(200).json(favorites)
}
exports.save = async (req, res, next) => {
  try {
    //   console.log(req.body)
    let result= await  FavoriteMovie.save(req.body)
    res.status(201).json(result);
  } catch (err) {
    next(err)
  }
}

exports.remove = async (req, res, next) => {
  try {
  let result=  await FavoriteMovie.deleteById(req.params.id)
  console.log(req.params.id)
    res.status(200).json({result})
  } catch (err) {
    next(err)
  }
}


