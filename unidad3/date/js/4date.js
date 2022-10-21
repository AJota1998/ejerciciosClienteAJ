/**
 * Función que devuelve un formato de hora según introduzca el usuario un número u otro.
 */

function hora() {

    let formatUsuario = prompt("Introduzca:\n1 para formato 14:35:07\n2 Para saber que hora es en formato AM/PM");
    console.log(formatUsuario);

    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let format1 = (hora + ":" + minuto + ":" + seconds);
    console.log(format1)
    
    let hora2 = new Date().getHours();
    let formatHora
    if (hora2 > 12 && hora2 <=24) {
            formatHora = ((hora2-12) + ":" + minuto + ":" + seconds + " PM")
            console.log(formatHora)
    } else if (hora2 < 12 && hora >= 0) {
            formatHora = (hora2 + ":" + minuto + ":" + seconds + " AM")
            console.log(formatHora)       
    }

    (formatUsuario == 1) ? alert("Son las: " + format1) : 
    (formatUsuario == 2) ? alert("Son las: " + formatHora) : alert("Número introducido no válido");

   
    console.log(formatHora);
 

}