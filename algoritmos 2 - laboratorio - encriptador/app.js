var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

var encryptInput = document.getElementById("encrypt-area");
var decryptInput = document.getElementById("decrypt-area");

var text = "";

//en los buttons de HTML tenemos la función con los parametros correspondientes

var searchIndex = (alphabet, letter) => { //Buscamos el índice de la letra

    for(var i = 0; i < alphabet.length; i ++){
        console.log("la busco en  " + i);

        if (alphabet[i] === letter) {
            console.log("encontrado en index " + i);
            return i;
        }
    }
    return -1;    
}


var transformLetter = (letter, alphabet) => { //2. Le paso la funcion que busca el indice que coincide
    
    //y busco ese indice en el alfabeto encriptado
    var letterIndex = searchIndex(alphabet, letter); 
    
    console.log("almaceno el indice de la letra, el indice es: " + letterIndex);

    if (alphabet === plainAlphabet){
        var alphatetToConvert = encryptedAlphabet;
    }

    if (alphabet === encryptedAlphabet){
        var alphatetToConvert = plainAlphabet;
    }

    //con ese indice almacenado cogemos la letra que correspondea ese indice en el otro alfabeto
    var transformedLetter = alphatetToConvert[letterIndex];
    console.log("y la letra que corresonde es " + transformedLetter);
    return transformedLetter;
}

var transformMessage = (text, inputWhichTextComeFrom, outPut, alphabet) =>{
    var text = inputWhichTextComeFrom.value;
    console.log(text + inputWhichTextComeFrom + outPut + alphabet);
    var messageLowerCase = text.toLowerCase();
    var result="";

    for(letter of messageLowerCase){  //1. descompongo en letras el texto
        //transofrmacion
        //Llamar a una funcion a la que le paso la letra y me la devuelve encriptada
        console.log("Empiezo a iterar con la letra --------" + letter);
        result += transformLetter(letter, alphabet);  

    }

    console.log("Y el texto encadenado eeees....CHAN CHAAAAN: " + result);
    //Imprimo el texto resultante en el otro textarea ya encripatado
    outPut.value = result;
    return result;
}


////document.getElementById("encrypt-btn").addEventListener("click", transformMessage);
//document.getElementById("decrypt-btn").addEventListener("click", transformMessage);



// var encrypt = () => {
//     var takeText = document.getElementById("encrypt-area").value;

//     for(var index = 0; index < takeText.length; index ++){ //primer bucle con el tamaño del texto introducido
//         console.log("PRIMER bucle posicion " + index + " letra " + takeText);

//         for(var s = 0; s < plainAlphabet.length; s ++){
//             console.log("segundo bucle posicion " + s + " letra " + plainAlphabet[s]);

//             if(plainAlphabet[s] === takeText[index]){
//                 console.log("coincide en " + s + takeText);
//                 var storedIndex = s; //guardo el index del valor que coincide en el primer alfabeto

//                 var storedPrev = encryptedAlphabet[s];
//                 for(var e = 0; e < encryptedAlphabet.length; e ++){
//                     console.log(storedIndex + takeText + encryptedAlphabet[s]); 
                   
         
//                     console.log("SWAAAAAAAAP " + storedPrev);
//                     var storedPrev = document.getElementById("decrypt-area").value += encryptedAlphabet[s];//lo sustituyo con el indice del alfabeto anterior
//                 }

//             }else{
//                 console.log("No coincide");
//             }
//         }
//     }
// }


//