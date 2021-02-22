

// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];


var main = document.getElementById("main");
var list = document.getElementById("product-list-container");

var createDescription = product => {
  var description = document.createElement("h5");
  description.innerText = product.description + " ·  ·  · " + product.price + " €/unit";
  description.setAttribute("class", "product-name");
  main.appendChild(description);
  main.appendChild(list);
}

var createInput = (product) => {
  var input = document.createElement("input");
  input.setAttribute("class", "product-unit");
  input.setAttribute("type", "number");
  input.setAttribute("max", product.stock);
  input.setAttribute("min", 0);
  //input.addEventListener("change", event => product.units = parseInt(event.target.value));
  input.addEventListener("change", 
    function(){
      product.units = parseInt(event.target.value);

      if (product.units > 0){
        document.getElementById("calculate-btn").disabled = false;
      }
      else{
        document.getElementById("calculate-btn").disabled = true;
      }
    }
  )
  main.appendChild(input);
}

document.getElementById("calculate-btn").disabled = true;

for (var product of products){
  createDescription(product);
  createInput(product);
}

document.getElementById("calculate-btn").addEventListener("click", function(){
  var subTotal = 0;
  var totalIVA = 0; //total con iva sumado
  var iva = 0;

  for(var product of products){
    subTotal += product.units * product.price;

    if (product.units > 0){
      iva = product.price * product.tax/100
      totalIVA += product.units * product.price + iva;
      console.log(product);
    }
  }

  document.getElementById("subtotal").innerText = subTotal.toFixed(2) + " €";
  document.getElementById("iva").innerText = iva.toFixed(2) + " €";
  document.getElementById("total").innerText = totalIVA.toFixed(2) + " €";
});





