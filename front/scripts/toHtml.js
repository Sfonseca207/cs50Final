const toHtml = (object)=>{

    const divCol = document.createElement("div");
    divCol.classList.add("col-md-4", "mb-4"); 

    const divCard = document.createElement("div");
    divCard.classList.add("card", "h-100");

    const poster = document.createElement("img");
    poster.classList.add("card-img-top");
    poster.src = object.poster;
    poster.alt = object.title; 

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerText = object.title;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerText = `Year: ${object.year}`;

    const director = document.createElement("p");
    director.classList.add("card-text");
    director.innerText = `Director: ${object.director}`;

    const duration = document.createElement("p");
    duration.classList.add("card-text");
    duration.innerText = `Duration: ${object.duration}`;

    const genre = document.createElement("p");
    genre.classList.add("card-text");
    genre.innerText = `Genre: ${object.genre}`;

    const rate = document.createElement("p");
    rate.classList.add("card-text", "rating");
    rate.innerText = `Rating: ${object.rate}/10`;

    
    divCardBody.appendChild(title);
    divCardBody.appendChild(year);
    divCardBody.appendChild(director);
    divCardBody.appendChild(duration);
    divCardBody.appendChild(genre);
    divCardBody.appendChild(rate);
    
    divCard.appendChild(poster);
    divCard.appendChild(divCardBody);
    
    divCol.appendChild(divCard);

    return divCol;
    
}

module.exports = toHtml;