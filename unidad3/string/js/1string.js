/**
 * Función que devuelve una serie de operaciones a raíz de una cadena introducida 
 */

function nombreYapellidos() {

    let nombYapell = prompt("Introduzca su nombre y apellidos");
    console.log(nombYapell);

    let contador = 0;
    
    for (let i=0; i<=nombYapell.length-1; i++) {
        if(nombYapell.charAt(i)!= " ") {
            contador++;
        }
    }
    console.log(contador);

    let cadenaMinuscula = nombYapell.toLocaleLowerCase();
    let cadenaMayuscula = nombYapell.toUpperCase();

    let cadenaseparada = (nombYapell.split(" "));
    let cad3lineas = "";
    for (let i=0; i<=cadenaseparada.length-1; i++) {
        cad3lineas += cadenaseparada[i] + "\n"
        console.log(cad3lineas);
    }
    
    let nickpropuesto = cadenaseparada[0].charAt(0) + cadenaseparada[cadenaseparada.length-2] + cadenaseparada[cadenaseparada.length-1].charAt(0);
        console.log(nickpropuesto);
    
    let nickpropuesto2 = cadenaseparada[0].substring(0,3) + cadenaseparada[cadenaseparada.length-2].substring(0,3) + cadenaseparada[cadenaseparada.length-1].substring(0,3);
        console.log(nickpropuesto2);

    let resultado = "Tamaño del nombre y apellido: " + contador + " carácteres" +
    "\nCadena en mayúscula: " + cadenaMayuscula + "\nCadena en minúscula: " + cadenaMinuscula + 
    "\nNombre dividido:\n" + cad3lineas + "\nPropuesta de nick 1: " + nickpropuesto + 
    "\nPropuesta de nick 2: " + nickpropuesto2;

    alert(resultado);
    
}