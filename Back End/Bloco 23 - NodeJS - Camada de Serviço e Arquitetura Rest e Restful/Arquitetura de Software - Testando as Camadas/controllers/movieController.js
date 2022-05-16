const MoviesService = require("../services/movieService");

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send("Dados inválidos");
  }

  res.status(201).send("Filme criado com sucesso!");
};

const getById = async (req, res) => {
  const { id } = req.params;

  const movie = await MoviesService.getById(id);

  if (!movie) {
    return res.status(404).send("Filme não encontrado");
  }

  res.status(200).json(movie);
};
module.exports = {
  create,
  getById,
};
