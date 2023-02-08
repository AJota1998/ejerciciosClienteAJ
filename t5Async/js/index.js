window.onload = inicio;

function inicio() {
    document.getElementById("enviar").addEventListener('click', add_serie, false);
}

function add_serie() {

    let titulo = document.getElementById("titulo").value;
    let director = document.getElementById("director").value;
    let cadena = document.getElementById("cadena").value;
    let anyo = document.getElementById("anio").value;
    let terminada = document.getElementById("terminada").checked;
    let serie;

    serie = {
        'titulo': titulo,
        'director': director,
        'cadena': cadena,
        'anyo': anyo,
        'terminada': terminada
    }

    realizarPOST(serie)
}

function realizarPOST(serie) {

    peticion_http = new XMLHttpRequest();

    peticion_http.open('POST', "create_serie.php");
    peticion_http.setRequestHeader('Content-type', 'application/json');
    let cadena_formato_json = JSON.stringify(serie);
    
    peticion_http.onreadystatechange = estado_peticion;
    peticion_http.send(cadena_formato_json);
}

function estado_peticion() {

    if (
        peticion_http.readyState === 4 &&
        peticion_http.status === 200 &&
        peticion_http.responseText === '"ok"') {
            div_a_pintar.style.color = 'green';
        } else {
            div_a_pintar.style.color = 'red';
        }
    console.log(peticion_http.responseText);
    div_a_pintar.innerHTML = peticion_http.responseText;
}

