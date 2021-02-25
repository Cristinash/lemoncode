// UTILIDADES
// Antes de empezar con los ejercicios, una pequeña explicación. En el codigo de estos ejercicios encontrarás lo siguiente:
// Crear un array vacío de longitud n:
var myEmptyArray = new Array(3); // Array vacio de 3 posiciones.
console.log(myEmptyArray); // [empty × 3]

//Rellenar todas las posiciones de un array con el mismo valor:
var myArray = new Array(3); // Array vacio de 3 posiciones.
myArray.fill("Hola");
console.log(myArray); // ["Hola", "Hola", "Hola]

// El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) 
// hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

//En una sola línea equivaldría a:
var myArray = new Array(3).fill("Hola");
console.log(myArray); // ["Hola","Hola","Hola"]


// Vamos a implementar una agenda para un equipo de personas, de modo que nos indique que horas tienen libres y que
// horas están ocupados. Además, vamos a generar un algoritmo que haga una búsqueda en un equipo y determine cual es la
// primera hora en que todos los miembros del equipo están libres, para asi poder establecer una reunión. Es decir, que busque
// el primer hueco disponible en sus agendas.

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
    ];

    // Datos
    var myTeam = [
    {
    name: "María",
    availability: new Array(8).fill(true)
    },
    {
    name: "Pedro",
    availability: new Array(8).fill(true)
    },
    {
    name: "Esther",
    availability: new Array(8).fill(true)
    },
    {
    name: "Marcos",
    availability: new Array(8).fill(true)
    },
    ];

    
//Generación aleatoria de la disponibilidad
var getRandom = (a, b) => (Math.random() < 0.5 ? a : b);


var randomAvailability = () => {
    for(i in WORK_HOURS){

        isTrueFalse = getRandom(true,false);
        console.log(WORK_HOURS[i] + " " + isTrueFalse);


        if(isTrueFalse === true){
            console.log("Hueco disponible de ----------- " + WORK_HOURS[i]);
        }else{
            console.log("No disponible");
        }

    }
};

for( i in myTeam){
   console.log("iteracion " + i + " es " + myTeam[i].name);
   randomAvailability();
}

