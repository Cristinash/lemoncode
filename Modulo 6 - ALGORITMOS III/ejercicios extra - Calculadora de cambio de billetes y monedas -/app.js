//Calculadora de cambio óptimo de billetes y monedas

var moneyToReturn;
var num1;
var num2;
var validBillsArr= [];
var quantityArr= [];
var money = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];

var total = num1 => {
   return num1 = document.getElementById("total").value;
}

var given = num2 => {
    return num2 = document.getElementById("given").value;
}


var calculateBillsToReturn = () => {

    for(i in money){
        division = moneyToReturn / money[i];
        console.log(division, money[i]);
        console.log("money to return before : " + moneyToReturn);

            if(division > 0.99){
                validBillsArr.push(money[i]); //storing valid bills in array
                quantityArr.push(Math.trunc(division)); //storing bills quantity in array           
            }      

            moneyToReturn = moneyToReturn - Math.trunc(division) * money[i]; //Vemos que podemos dar 2 billetes de 20 euros, así que lo restamos del 
            //importe de la devolución importe devolución = importe devolución - 2 * 20 .
            console.log("money to return  AFTER : " + moneyToReturn);
            console.log(quantityArr + " billetes de " + validBillsArr);
            if(division = 0){return;}
    };
};

var totalMoneyReturn = () => {
       moneyToReturn = given(num2) - total(num1);
       console.log("money to return: " + moneyToReturn);
       
       calculateBillsToReturn();

       for(index in validBillsArr){
            console.log(
                quantityArr[index] + (validBillsArr[index] > 5 ? " bill/s of " : " coins of ") + validBillsArr[index] + " € "
            );
       }
}


var calculate = () => { //Por qué esta función no lleva return?
    document.getElementById("calculate").addEventListener("click", totalMoneyReturn);
}

calculate();
