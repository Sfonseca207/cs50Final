const { Router } = require("express");
const movieController = require("../controllers/movieController");
const checkDetails = require("../middlewares/missingDetails");

const movieRouter = Router();

movieRouter.get("/", movieController.getMovieController);
movieRouter.post("/", checkDetails, movieController.createMovieContoller);

module.exports = movieRouter;