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

var availableArray = [];

var getRandom = () => (Math.random() > 0.5);

function allAvailability(hourRange, hourIndex){
    if(hourRange === true){
        console.log(person, hour + " en: " + WORK_HOURS[hour]);
        var storeIndex = hourIndex;
        availableArray.push(parseInt(storeIndex));
    }
}

for(person=0; person < myTeam.length; person++){
    for(hour in WORK_HOURS){
        myTeam[person].availability[hour] = getRandom();// cambiamos la availibility a random
        allAvailability(myTeam[person].availability[hour], hour);
    }
    console.log(myTeam[person].availability); //disponibilidad de cada persona
} 
console.log("array que queda de horas disponibles",availableArray); //array que queda de horas disponibles 

var searchIndex = () => {
    for (i = 0; i < WORK_HOURS.length; i++){
        // totalMembers lo inicializamos a array vacío
        var totalMembers = [];
        console.log(i,WORK_HOURS[i]," ---------")
        // Filter es una función que recorre el array y filtra los elementos que cumplan con una condición y te devuelve un array con los elementos que cumplen con la condición.
        //https://ed.team/blog/javascript-filtrar-elementos-de-un-array-con-filter
        totalMembers = availableArray.filter(element => element === i); //element es un parametro
        console.log(totalMembers);
        // Como totalMembers es un array, miramos su longitud para saber si es idéntico a 4, si no, el bucle continua
        if (totalMembers.length === 4) {
            console.log(i)
            return WORK_HOURS[i];
        }
    }
}

var index = searchIndex();
// comprobamos si índice es distinto a 0 o distinto de undefined
index !== 0 && index !== undefined ? console.log(" el equipo esta disponible a las " + WORK_HOURS[index]) : console.log("El equipo no puede reunirse.");



