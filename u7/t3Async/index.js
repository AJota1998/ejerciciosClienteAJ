let peticion_http;
let Tabla = document.getElementById("tabla");


window.onload = carga_contenido;

function carga_contenido() {
      
    peticion_http = new XMLHttpRequest();

  if (peticion_http) {

    peticion_http.onreadystatechange = muestra_contenido;
    peticion_http.open("GET", 'series.xml');
    peticion_http.send();
  }
}

function muestra_contenido() {
    if (peticion_http.readyState === 4) {
        if (peticion_http.status === 200) {
            let fichero = peticion_http.responseXML;
            pintarTabla(fichero);
        }
    }
}

function pintarTabla(fichero) {
    console.log("Entrando en la función pintarTabla");
    
    let titulo = fichero.getElementsByTagName("TITULO");
    let cadena = fichero.getElementsByTagName("CADENA");
    let director = fichero.getElementsByTagName("DIRECTOR");
    let anio = fichero.getElementsByTagName('ANIO');
    let terminado = fichero.getElementsByTagName('TERMINADO');

    recorrerEtiquetas(titulo);
    recorrerEtiquetas(cadena);
    recorrerEtiquetas(director);
    recorrerEtiquetas(anio);
    recorrerEtiquetas(terminado);
    
    console.log("Saliendo de la función pintarTabla");
}

function recorrerEtiquetas(etiqueta) {
    let tr1 = document.createElement("tr");
    for (let i = 0; i < etiqueta.length; i++) {
        let td1 = document.createElement("td");
        let texto_td1 = document.createTextNode(etiqueta[i].textContent);
        td1.appendChild(texto_td1);
        tr1.appendChild(td1);
        Tabla.appendChild(tr1);
    }
}