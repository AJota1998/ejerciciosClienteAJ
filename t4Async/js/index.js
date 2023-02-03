let peticion_http;
let Tabla = document.getElementById("div_tabla");


window.onload = boton;

function boton() {
    let el_boton = document.getElementById("elboton");
    el_boton.addEventListener("click", carga_contenido, false);
}

function carga_contenido() {
      
    peticion_http = new XMLHttpRequest();

  if (peticion_http) {

    peticion_http.onreadystatechange = muestra_contenido;
    peticion_http.open("GET", 'ej.json');
    peticion_http.send();
  }
}

function muestra_contenido() {
    if (peticion_http.readyState === 4) {
        if (peticion_http.status === 200) {
            let fichero_json = JSON.parse(peticion_http.responseText);
            console.log(fichero_json);
            pintarTabla(fichero_json);
        }
    }
}


function pintarTabla(fichero_json) {
    console.log("Entrando en la función pintarTabla");
    
    texto = "<table border=1><tr><th>TITULO</th><th>CADENA</th><th>DIRECTOR</th<th>AÑO</th<th>TERMINADO</th</tr>";

    console.log(fichero_json);
    let series = fichero_json.SERIES;
    

    for (let i = 0; i < series.length; i++) {
        let serie = series[i];
        texto +="<tr><td>"+series.TITULO+"</td><td>"+series.CADENA+"</td></tr>"+"<tr><td>"+series.DIRECTOR+"</td><td>"+series.ANIO+"</td><td>"+series.TERMINADO;
    }
    texto += "</table>"

    let elemento_a_añadir = document.createTextNode(texto)

    div_tabla.appendChild(elemento_a_añadir);
    
    console.log("Saliendo de la función pintarTabla");
}
