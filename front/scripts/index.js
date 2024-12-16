const formLoad = require('./form.js');
const toHtml = require('./toHtml.js');
const axios = require('axios');

const pathname = location.pathname

const cardSection = document.getElementById("actualCards")


const fetchData = async () => {
    
try {

    const dataFetched = await axios.get("http://localhost:3000/movies");
    const arrayHtmlCards = dataFetched.data.data.map(toHtml);

    arrayHtmlCards.forEach((object) => {

        cardSection.appendChild(object)

    })
    
} catch (error) {
    
    alert(`Whoops, algo malo sucedio ${error.message} :(`);

}

}

if (pathname.endsWith("index.html") || pathname === "/") {
    fetchData();
}

if (pathname.endsWith("form.html")) {
    formLoad();
}
