let peticion_http;
let Tabla = document.getElementById("div_tabla");

window.onload = boton;

function boton() {
    let el_boton = document.getElementById("elboton");
    el_boton.addEventListener('click', carga_contenido, false)
}

function carga_contenido() {
  
    peticion_http = new XMLHttpRequest();

  if (peticion_http) {
    const URL = "http://localhost:8090/t4Async/ej4.json";
   
    peticion_http.onreadystatechange = muestra_contenido;
    peticion_http.open("GET", URL);
    peticion_http.send();
  }
}

function muestra_contenido() {
    if (peticion_http.readyState === 4) {
        if (peticion_http.status === 200) {
            let json = JSON.parse(peticion_http.responseText);
            let donde_pintar = document.getElementById("div_tabla");
            let series = document.getElementsByTagName("serie");
            crearTabla(json, donde_pintar)  
        }
    }
}

function crearTabla(json, donde_pintar) {

    /*Creamos la estructura de la tabla con sus titulos*/ 
    let h1 = document.createElement("h1");     
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");

    let texto_h1 = document.createTextNode("Series")
    h1.appendChild(texto_h1);

    let col_titulo = document.createElement("td");
    let Titulo = document.createTextNode("Título");
    col_titulo.appendChild(Titulo);
    fila.appendChild(col_titulo);

    let col_cadena = document.createElement("td");
    let Cadena = document.createTextNode("Cadena");
    col_cadena.appendChild(Cadena);
    fila.appendChild(col_cadena);

    let col_director = document.createElement("td");
    let Director = document.createTextNode("Director");
    col_director.appendChild(Director);
    fila.appendChild(col_director);

    let col_anio = document.createElement("td");
    let Anio = document.createTextNode("Año");
    col_anio.appendChild(Anio);
    fila.appendChild(col_anio);

    let col_terminada = document.createElement("td");
    let lend = document.createTextNode("Terminada");
    col_terminada.appendChild(lend);
    fila.appendChild(col_terminada);

    tabla.appendChild(fila);

    /*Recorremos el fichero json y rellenamos la tabla*/
    for (let i = 0; i < json.series.length; i++) {
        let fila = document.createElement("tr");
        let img_verde = document.createElement("img");
        let img_rojo = document.createElement("img");

        img_verde.src = "img/check.png";
        img_rojo.src = "img/cross.png";

        let col_titulo = document.createElement("td");
        let col_cadena = document.createElement("td");
        let col_director = document.createElement("td");
        let col_anio = document.createElement("td");
        let col_terminada = document.createElement("td");

        let dato_titulo = document.createTextNode(json.series[i].titulo);
        let dato_cadena = document.createTextNode(json.series[i].cadena);
        let dato_director = document.createTextNode(json.series[i].director);
        let dato_anio = document.createTextNode(json.series[i].anio);
        let dato_terminada = document.createTextNode(json.series[i].terminada);

        (Number.parseInt(dato_anio.textContent) >= 2000 && Number.parseInt(dato_anio.textContent) <= 2011) ? 
            col_anio.setAttribute("class", "amarillo") :
            Number.parseInt(dato_anio.textContent) < 2000 ?
            col_anio.setAttribute("class", "rojo") :
            Number.parseInt(dato_anio.textContent) > 2011 ?
            col_anio.setAttribute("class", "verde") : null;

        dato_terminada.textContent === "si"
          ? col_terminada.appendChild(img_verde)
          : dato_terminada.textContent === "no"
          ? col_terminada.appendChild(img_rojo)
          : "";

        col_titulo.appendChild(dato_titulo);
        col_cadena.appendChild(dato_cadena);
        col_director.appendChild(dato_director);
        col_anio.appendChild(dato_anio);

        fila.appendChild(col_titulo);
        fila.appendChild(col_cadena);
        fila.appendChild(col_director);
        fila.appendChild(col_anio);
        fila.appendChild(col_terminada);
        tabla.appendChild(fila);
      }

      donde_pintar.appendChild(h1);
      donde_pintar.appendChild(tabla);
}
