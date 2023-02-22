let xhr;
let criminales;
let criminales_filtrados = [];
let div_resultados = document.getElementById('resultados');

window.onload = () => {

    document
		.getElementById("load_fbi")
		.addEventListener("click", load_criminals);

	document
		.getElementById("clean_table")
		.addEventListener("click", clean);

    document 
        .getElementById("get_xmlhttp")
        .addEventListener("click", cargar_xmlhttp);

    document
        .getElementById("get_fetch")
        .addEventListener("click", cargar_fetch);
}


function load_criminals() {
    console.log("load_criminals");

    if (XMLHttpRequest) {
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = comprobar_estado;
		xhr.open("GET", "https://api.fbi.gov/@wanted");
		xhr.send();
	}
}


function comprobar_estado() {
	console.log("comprobar_estado");

	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log(JSON.parse(xhr.responseText));
		criminales = JSON.parse(xhr.responseText);
        console.log(criminales)
        resultados.innerHTML = "DATOS CARGADOS DESDE FBI"
        filtrar(criminales);
        pintar_tabla(criminales_filtrados);
    }
}


function filtrar(criminales) {
    console.log("filtrar");

    for (let i = 0; i < criminales.items.length; i++) {
        
        objeto_criminal =  {
            uid: criminales.items[i].uid,
            title: criminales.items[i].title,
            description: criminales.items[i].description,
            aliases: [criminales.items[i].aliases],
            images: criminales.items[i].images[0].thumb
        }
        criminales_filtrados.push(objeto_criminal);
    }
    console.log(criminales_filtrados);
}


function pintar_tabla(crim_filt) {
    console.log("pintartabla")

	let div_tabla = document.getElementById("div_tabla");
	div_tabla.innerHTML = "";

	let tabla = document.createElement("table");
	tabla.setAttribute("style", "border-collapse: collapse; text-align: center");
	let tr = document.createElement("tr");

	let rotulos = [
		"uid",
		"title",
		"description",
		"aliases",
		"images",
        "save"
	];

	rotulos.forEach((rotulo) => {
		let th = document.createElement("th");
		th.setAttribute("style", "border: solid 2px");
		th.appendChild(document.createTextNode(rotulo));
		tr.appendChild(th);
	});
	tabla.appendChild(tr);

	crim_filt.forEach((crim) => {

		let tr = document.createElement("tr");
		for (const item in crim) {
			let td = document.createElement("td");
			td.setAttribute("style", "border: solid 2px");
			td.appendChild(document.createTextNode(crim[item]));
			tr.appendChild(td);

            console.log(item)
            
            if (item.includes("http")) {
                let td = document.createElement("td");
                td.setAttribute("style", "border: solid 2px");
                td.appendChild(document.createTextNode(crim[item]));

                
                let img = document.createElement("img");
                img.setAttribute("src", crim[item].images[0].thumb)

                td.appendChild(img)
                tr.appendChilt(td);
                console.log("hola")
            }
        }

        let td_button = document.createElement("td");
		td_button.setAttribute("style", "border: solid 2px");

        let button = document.createElement("button");
        let texto_button = document.createTextNode("Guardar");
        button.appendChild(texto_button);
        button.setAttribute("id", crim.uid)
        button.addEventListener("click", guardar_contenido);

        td_button.appendChild(button);
        tr.appendChild(td_button);
        
		tabla.appendChild(tr);
    });

	div_tabla.appendChild(tabla);
}


function guardar_contenido(e) {
    console.log("guardar_contenido");
    let boton = e.currentTarget
    console.log(boton);

    for (let i = 0; i < criminales_filtrados.length; i++) {
        if (criminales_filtrados[i].uid === boton.id) {

            objeto_criminal = {
                uid: criminales_filtrados[i].uid,
                title: criminales_filtrados[i].title,
                description: criminales_filtrados[i].description,
                aliases: criminales_filtrados[i].aliases,
                images: criminales_filtrados[i].images
            }

            insercion_post(objeto_criminal);
        }        
    }
}


function insercion_post(objeto_criminal) {
    console.log("insercion_post");
    
    fetch("save_criminal.php", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(objeto_criminal),
	})
		.then((response) => {
			if (response.ok) return response.json();
		})
		.then((data) => {
            resultados.innerHTML = data.result;
		});
}


function cargar_xmlhttp() {
    console.log("cargar_xmlhttp");

    if (XMLHttpRequest) {
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = comprobar_estado_bbdd;
		xhr.open("GET", "get_criminals.php");
		xhr.send();
	}

}


function comprobar_estado_bbdd() {
    console.log("comprobar_estado_bbdd");

    if (xhr.readyState === 4 && xhr.status === 200) {
		console.log(JSON.parse(xhr.responseText));
		criminales = JSON.parse(xhr.responseText);
        resultados.innerHTML = "DATOS CARGADOS PETICIÓN XML DESDE BBDD"
        pintar_tabla(criminales);
    }
}


function cargar_fetch() {
    console.log("cargar_fetch");

    fetch("get_criminals.php")
		.then((response) => {
			if (response.ok) return response.json();
            
		})
		.then((data) => {
            resultados.innerHTML = "DATOS CARGADOS FETCH DESDE BBDD"
			criminales = data
            pintar_tabla(criminales);
		});       

}


function clean() {
    console.log("clean");

    let div_tabla = document.getElementById("div_tabla");
	div_tabla.innerHTML = "";
    resultados.innerHTML = "TABLA LIMPIA"
}