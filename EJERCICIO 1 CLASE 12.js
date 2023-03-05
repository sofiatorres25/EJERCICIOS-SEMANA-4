/*Hacé una función llamada saludo, en la que el prompt va a solicitar el nombre del ingresante de
la página. Una vez ingresado, deberá salir una alerta dando una bienvenida.
Si el usuario no ingresa nada, debería salir un mensaje que diga que ingrese su nombre.*/


nombre2=prompt("Ingrese su nombre");
saludo(nombre2);

function saludo(nombre1) {

if (nombre1 == null, nombre1 == "") {
    alert("Ingrese su nombre");
} else {
    alert("Bienvenido/a " + nombre1 + "!");
}
    }