let xhr;
let resultados = document.getElementById('resultados');
let criminales_filtrados = [];

window.onload = () => {

    document
		.getElementById("cargar_xml")
		.addEventListener("click", cargar_apod_xml);

	document
		.getElementById("cargar_fetch")
		.addEventListener("click", cargar_apod_fetch);
}


function cargar_apod_xml() {
	console.log("cargar_apod_xml");

    let numero = document.getElementById("numero").value;

    if (XMLHttpRequest) {
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = comprobar_estado;
		xhr.open("GET", `https://api.nasa.gov/planetary/apod?api_key=7hKwlSicXVAEGgrg86Fbr6Srz1Erfa0FhzEjDXmE&count=${numero}`);
		xhr.send();
	}
}


function comprobar_estado() {
	console.log("comprobar_estado");

	if (xhr.readyState === 4 && xhr.status === 200) {
		resultados.innerHTML += "Datos cargados XML <br>"
		console.log(JSON.parse(xhr.responseText));
		criminales_filtrados = JSON.parse(xhr.responseText);
        pintar_options(criminales_filtrados);
    	}
}


function cargar_apod_fetch() {
    console.log("cargar_apod_fetch");

    let numero = document.getElementById("numero").value;
    
    let url = `https://api.nasa.gov/planetary/apod?api_key=7hKwlSicXVAEGgrg86Fbr6Srz1Erfa0FhzEjDXmE&count=${numero}`

    fetch(url)
		.then((response) => {
			if (response.ok) return response.json();
            
		})
		.then((data) => {
            resultados.innerHTML += "Datos cargados Fetch <br>"
			criminales_filtrados = data
            console.log(criminales_filtrados);
            pintar_options(criminales_filtrados);
		});       
}


function pintar_options(result_petic) {
    console.log("pintar_options");

    let select = document.getElementById("sl_apod");

    for (let i = 0; i < result_petic.length; i++) {
        let option = document.createElement("option");
        let texto_option = document.createTextNode(result_petic[i].title);
        option.appendChild(texto_option);
        select.appendChild(option);
    }

    select.addEventListener("change", pintar_contenido);
}


function pintar_contenido() {
    console.log("pintar_contenido");

    let div_pintar = document.getElementById("pintar_contenido");

    let select = document.getElementById("sl_apod");

    for (let i = 0; i < criminales_filtrados.length; i++) {
        if (criminales_filtrados[i].title === select.value) {

            resultados.innerHTML += "Mostrando APOD con título " + criminales_filtrados[i].title + "<br>"

            let img = document.createElement("img");
            img.setAttribute("src", criminales_filtrados[i].url);
            div_pintar.appendChild(img);
            

            let titulo = document.createElement("h3");
            let texto_titulo = document.createTextNode(criminales_filtrados[i].title);
            titulo.appendChild(texto_titulo);
            div_pintar.appendChild(titulo);

            let descripcion = document.createElement("p");
            let texto_descripcion = document.createTextNode(criminales_filtrados[i].explanation);
            descripcion.appendChild(texto_descripcion);
            div_pintar.appendChild(descripcion);

            let fecha = document.createElement("p");
            let texto_fecha = document.createTextNode(criminales_filtrados[i].date);
            fecha.appendChild(texto_fecha);
            div_pintar.appendChild(texto_fecha);

            let boton = document.createElement("button");
            let boton_texto = document.createTextNode("Guardar");
            boton.setAttribute("id", "boton_guardar");
            boton.appendChild(boton_texto);
            div_pintar.appendChild(boton);

            boton.addEventListener("click", guardar_contenido);
        }        
    }
}


function guardar_contenido() {
    console.log("guardar_contenido");
    
    let select = document.getElementById("sl_apod");

    for (let i = 0; i < criminales_filtrados.length; i++) {
        if (criminales_filtrados[i].title === select.value) {

            apod = {
                title: criminales_filtrados[i].title,
                url: criminales_filtrados[i].url,
                explanation: criminales_filtrados[i].explanation,
                date: criminales_filtrados[i].date
            }

            insercion_post(apod);
        }        
    }
}


function insercion_post(apod) {
    console.log("insercion_post");
    
    fetch("save_apod.php", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(apod),
	})
		.then((response) => {
			if (response.ok) return response.json();
		})
		.then((data) => {
            resultados.innerHTML += data.resultado + "<br>";
		});
}










