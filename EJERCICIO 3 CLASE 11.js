/*Harás una variable que contenga un array de datos, y con el ciclo FOR lo recorrerás.
Luego insertarás un elemento con las propiedades aprendidas en clase, y lo volverás a recorrer.*/

 

  var var1 = ["1", "2", "3", "4", "5", "6", "7"];
  for (let i=0; i<var1.length; i++) {
  console.log ("El elemento es: " + var1[i]);
  var1.push("8");
  }