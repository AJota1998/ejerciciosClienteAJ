// variable de la ventana
let nuevaVentana; 

/**
 * Función que devuelve una serie de funcionalidades al clicar unos botones
 */

function nueva() {

    let pregunta = prompt("¿Desea abrir una nueva ventana? s/n");

    if(pregunta == "s") {
        nuevaVentana=window.open("ventana ejemplo", "segundaPag", 
        "toolbar=no,location=no,menubar=no,resizable=no,"+ 
        "width=200,height=80,top=500,left=500"); 

        nuevaVentana.document.write("<HTML><HEAD><TITLE>"+ 
            "Ventana de ejemplo</TITLE></HEAD>"); 

        nuevaVentana.document.write("<BODY><form>"); 

        nuevaVentana.document.write("<input type='button' "+ 
            "value='Cerrar' onClick='window.close();'>"); 

        nuevaVentana.document.write("<input type='button' "+ 
        "value='mover 10px' onClick='window.moveTo(top=510,left=510);'>");

        nuevaVentana.document.write("<input type='button' "+ 
        "value='mover posicion 100,100' onClick='window.moveTo(top=100,left=100);'>");

        nuevaVentana.document.write("<input type='button' "+ 
        "value='colocar scroll arriba' onClick='window.scrollTo(top=100,left=100);'>");

        nuevaVentana.document.write("<input type='button' "+ 
        "value='colocar scroll 10x arriba' onClick='window.scrollBy(top=10,left=10);'>");

        nuevaVentana.document.write("<p>Texto de ejemplo</p");

        nuevaVentana.document.write("</form>");

        nuevaVentana.document.write("</BODY></HTML>");

        nuevaVentana.document.close();
    } else {
        alert("Ventana no abierta")
    }
     
}
