alert("Bienvenido a la heladería");

let topping = prompt("Seleccione su topping: Oreo, Kinder o KitKat");
let precio;
let precioFinal;
var helado = 200;

if (topping == "Oreo") {
    precio = 10;
 }else if (topping == "Kinder") {
    precio = 15;
  }else if (topping == "KitKat") {
    precio = 25;
   }else if (topping != "Oreo","Kinder","KitKat"){
    console.log = "No tenemos ese topping"
}


precioFinal = (helado + precio);
alert(console.log = "El helado cuesta $" + precioFinal)
