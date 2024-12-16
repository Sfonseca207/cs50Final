const checkDetails = (req, res, next) => {
    const { title, year, director, duration, genre, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !poster || genre.length === 0) {
        return res.status(400).json({
            message: "Faltan datos"
        });
    }

    next(); 
}

module.exports = checkDetails;
