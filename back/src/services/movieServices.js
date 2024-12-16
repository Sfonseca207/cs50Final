const { Movie } = require("../models/Movies");


  const  getMovies = async () => {

    return await Movie.find()
    

  }

  const createMovieService = async (movie)=> {

  
    await Movie.create(movie)
    return "Se creo la pelicula con exito"

  }

  module.exports = {

    
    getMovies,
    createMovieService

  }


  