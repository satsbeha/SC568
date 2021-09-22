const Movie = require('../models/movie')
exports.getAllMovie = async (req, res, next) => {
  const movies = await Movie.findAll();;
  res.status(200).json(movies)
}
exports.save = async (req, res, next) => {
  try {
    const movie = req.body;
    const newMovie = await new Movie(null,movie.name,movie.rating,movie.genre,movie.director,movie.yearRelease,movie.description).save()
    console.log(newMovie)
    res.status(201).json(newMovie.ops);
  } catch (err) {
    next(err)
  }
}
exports.getById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }

}
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    const updateMovie = new Movie(id,movie.name,movie.rating,movie.genre,movie.director,movie.yearRelease,movie.description);
    await updateMovie.update()
    res.status(200).json(updateMovie)
  } catch (err) {
    next(err)
  }
}
exports.delete = async (req, res, next) => {
  try {
    await Movie.deleteById(req.params.id)
    res.status(200).json({ deleted: "successfully" })
  } catch (err) {
    next(err)
  }
}


