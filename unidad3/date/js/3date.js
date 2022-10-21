/**
 * Función que devuelve un formato de fecha actual según introduzca el usuario un número u otro.
 */

function fecha() {

    let formatoUsuario = prompt("Introduzca:\n1 para formato 15/10/2022\n2 para formato Jueves, 15 de octubre de 2020\n3 para formato Thursday, October 15, 2020");
    console.log(formatoUsuario);

    let formato1 = new Date().toLocaleDateString();
    let formato2 = new Date().toLocaleDateString('es', {weekday:"long", month:"long", year:"numeric", day:"numeric"});
    let formato3 = new Date().toLocaleDateString('en', {weekday:"long", month:"long", year:"numeric", day:"numeric"});

    (formatoUsuario == 1) ? alert("Fecha: " + formato1) : 
    (formatoUsuario == 2) ? alert("Fecha: " + formato2) :
    (formatoUsuario == 3) ? alert("Fecha: " + formato3) : alert("Número introducido no válido");
     
}