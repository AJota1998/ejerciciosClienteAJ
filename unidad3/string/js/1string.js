/**
 * Función que devuelve una serie de operaciones a raíz de una cadena introducida 
 */

function nombreYapellidos() {

    let nombYapell = prompt("Introduzca su nombre y apellidos");

    let contador = 0;
    
    for (let i=0; i<=nombYapell.length-1; i++) {
        if(nombYapell.charAt(i)!= " ") {
            contador++;
        }
    }

    let cadenaMinuscula = nombYapell.toLocaleLowerCase();
    let cadenaMayuscula = nombYapell.toUpperCase();

    let cadenaseparada = (nombYapell.split(" "));
    let cad3lineas = "";
    for (let i=0; i<=cadenaseparada.length-1; i++) {
        cad3lineas += cadenaseparada[i] + "\n"
    }
    
    
}