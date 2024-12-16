const movieServices = require("../services/movieServices");

const getMovieController = async (req, res) =>{

    try {
        const respuesta = await movieServices.getMovies()
        res.status(200).json({

        message: "Aqui estan todas las peliculas",
        data: respuesta

    })
    } catch (error) {

        res.status(500).json({

            message: "Error del serivor, intente denuevo"

        })
        
    }
    
}

const createMovieContoller = async (req,res) =>{

    try {

        const respuesta = await movieServices.createMovieService(req.body)
        res.status(201).json({

            message: "Se creo la pelicula con exito",
            data: respuesta
        

        })
        
    } catch (error) {

        res.status(500).json({

            message: "No se pudo crear la pelicula"

        })
        
    }


        

    }



module.exports = { 
    
    getMovieController,
    createMovieContoller

};