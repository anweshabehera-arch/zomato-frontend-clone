// Navbar shadow on scroll

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 20){
        header.style.background = "rgba(180, 0, 0, 0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    }
    else{
        header.style.background = "rgba(255, 0, 0, 0.85)";
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    }
});


// Search input animation

const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
    searchInput.placeholder = "Search your favourite food...";
});

searchInput.addEventListener("blur", () => {
    searchInput.placeholder = "Search for restaurant, cuisine or a dish";
});


// Typing animation for text

const text = "Discover the best food & drink in Hanumangarh";
const paragraph = document.querySelector("main p");

let index = 0;

paragraph.innerHTML = "";

function typeEffect(){

    if(index < text.length){
        paragraph.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

window.onload = typeEffect;