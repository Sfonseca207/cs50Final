const axios = require("axios")

const formLoad = () => {

    const form = document.querySelector("form")
    const rButton = document.getElementById("resetB")
    
    form.addEventListener("submit", (event) => {
    
        event.preventDefault()
    
        const chekedGenres = document.querySelectorAll('input[type="checkbox"]:checked')
    
        const arrayOfGenres = Array.from(chekedGenres).map(checkBox => checkBox.value)
    
        const newMovie = {
    
            title: form.titulo.value,
            year: parseInt(form.anio.value, 10), 
            director: form.director.value,
            duration: `${form.horas.value} h ${form.minutos.value} m`,
            genre: arrayOfGenres,
            rate: parseFloat(form.rate.value), 
            poster: form.poster.value
    
        }
    
        for (const key in newMovie) {
            if(!newMovie[key]){
    
                console.log(`Element ${key} is missing`);
                
    
            }
    
            if(newMovie["genre"].length === 0){
    
                alert("Select at least a genre")
                return
    
            }
        }
    
        axios.post("http://localhost:3000/movies", newMovie)
        .then((respuesta) => {

            console.log(respuesta);

            alert("Movie added succesfully!")
            

        })
        .catch((error) => {
            console.log(error);
            
        })
        
    
    })      
    
    rButton.addEventListener("click", ()=>{
    
    form.reset()
    
    })
}

module.exports = formLoad;