//LABORATORIO 2, Cristina Sánchez Hernández
var hoteles = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img: "https://www.ahstatic.com/photos/1867_ho_00_p_1024x768.jpg",
    },
    Lani: {
        name: "Lani",
        location: "Tenerasasife",
        img: "https://www.ahstatic.com/photos/1867_ho_00_p_1024x768.jpg",
    },
};

var selectedHotel = prompt("Indica el hotel: Mencey o Lani");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

console.log(hoteles.selectedHotel);

// Objetivo 2 [Puntuación del hotel]
var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("¿Cuántas estrellas?");
document.getElementById("rating").innerHTML = stars[rating];


// Objetivo 3 [Preguntar al usuario si quiere enviar la reseña de forma anónima]
var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;
