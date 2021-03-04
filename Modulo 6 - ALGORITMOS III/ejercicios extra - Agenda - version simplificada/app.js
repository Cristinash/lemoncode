
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
    
    var getRandom = () => (Math.random() > 0.5);

    for(person in myTeam){
        for(hour in WORK_HOURS){
            myTeam[person].availability[hour] = getRandom();
        }
        console.log(myTeam[person].availability);
    }

    var found = false;
    for (let slot = 0; slot <= WORK_HOURS.length; slot++) {
        //console.log(slot, WORK_HOURS[slot]);
        var freeSlots = 0;
        for(person in myTeam){
            if(myTeam[person].availability[slot]){
                freeSlots++;
                //console.log(myTeam[person], myTeam[person].availability[slot], "freeslots", freeSlots);
            }
        }

        if(freeSlots == myTeam.length){
            console.log("Hueco encontrado en el horario " + WORK_HOURS[slot]);
            found = true;
            break;
        }
    }

    if(!found){
      console.log("No hay huecos disponibles");
    }