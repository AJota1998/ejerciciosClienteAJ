/**
 * Función que devuelve los cumpleaños que caerán en domingo hasta el año 2100
 */

function domingos() {

    let mes = prompt("Introduce el mes de tu cumpleaños")
    let dia = prompt("Introduce el día de tu cumpleaños")
    let year = 2022
    let contador = 0;

    while (year <= 2100) {
        
    let d = new Date(mes + "/" + dia + "/" + year);
    console.log(d);
        
        if (d.getDay(d) == 0) {
            contador++;
        }
        year++
    }
    console.log(contador);

}