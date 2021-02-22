
var array = [];
var n = 10;

var randomPick = (n, min, max) => {

    for(i=0; i < n; i++){
        
        var combinacion =+ Math.round(Math.random()*100);
        console.log(combinacion);

        array.push(combinacion); //metemos la combinacion de numeros en el array

    }  

    isEqual(array); // y sacamos el array a otra función para ver si se repite algún elemento

    return combinacion;
};

// var search = (array, target) => {   
//     console.log("buscamos en " + array + " el target " + target + " index anterior es " + index + " " + s);
//     for (var s = 0; s < array.length; s++) {

//         console.log(" ----------s en itreacion " + s + " " + array);
//         if (array[s] === target && index != s) return s;
//         }
//     return -1;
// };

var isEqual = (array) => {

    console.log("me traigo el array " + array);

    for (index in array) {
        var target = array[index];
        console.log("en la iteración " + index + " tengo que buscar el valor: " + target);

        for (var s = 0; s < array.length; s++) {
            console.log( " s en itreacion " + s + " " + array + "  " + array[s]);
            if (array[s] === target && index != s){
                console.log("----------¡Se repiten!" + target + "---------")
            };
        }
    }

}

randomPick(10, 1, 100);


