/**
 * Función que devuelve el nº de cumpleaños que caerán en domingo hasta el año 2100
 */

function domingos() {

    let mes = prompt("Introduce el mes de tu cumpleaños")
    let dia = prompt("Introduce el día de tu cumpleaños")
    let year = new Date().getFullYear();
    let contador = 0;
    let coinciden = "Son: "

    while (year <= 2100) {
        
    let d = new Date(mes + "/" + dia + "/" + year);
    console.log(d);
        
        if (d.getDay(d) == 0) {
            contador++;
            coinciden += year + ", "
        }
        year++
    }
    console.log(contador);
    alert("Hay " + contador + " años donde tu cumpleaños será domingo\n" + coinciden);

}