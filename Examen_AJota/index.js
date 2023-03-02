
let resultados = document.getElementById("resultados");
let personajes = [];
let personajes_filtrados = [];
let personajes_bbdd = [];
let div_tabla = document.getElementById("div_tabla");

window.onload = () => {
    
    document.getElementById("cargar_personajes").addEventListener("click", cargar_personajes)
    document.getElementById("guardar_personajes").addEventListener("click", guardar_personajesXML)
    document.getElementById("Obtener_personajesFETCH").addEventListener("click", obtener_personajesFETCH)
    document.getElementById("limpiar_tabla").addEventListener("click", limpiar_tabla)
    
}

function cargar_personajes() {
    console.log("cargar personajes")

	fetch("marvel.json")
		.then((response) => {
			if (response.ok) return response.json();
            
		})
		.then((data) => {
            console.log(data);
            personajes = data.data.results;
            console.log(personajes);
            resultados.innerHTML = "Datos cargados correctamente"
            pintar_personajes(personajes)
		});       
}


function filtrar_personajes() {
    console.log("filtrar personajes");

    for (let i = 0; i < personajes.length; i++) {
        objeto_filtrado = {
            id: personajes[i].id,
            imagen: personajes[i].thumbnail.path,
            nombre: personajes[i].name,
            modificado: personajes[i].modified,
            comics: personajes[i].comics.items.name
        }
        personajes_filtrados.push(objeto_filtrado);
    }
}


function pintar_personajes(personajes) {
    console.log("pintar_personajes")
   /*Creamos la estructura de la tabla con sus titulos*/ 
      
   let tabla = document.createElement("table");
   let fila = document.createElement("tr");

   let col_id = document.createElement("td");
   let id = document.createTextNode("id");
   col_id.appendChild(id);
   fila.appendChild(col_id);

   let col_name = document.createElement("td");
   let name = document.createTextNode("name");
   col_name.appendChild(name);
   fila.appendChild(col_name);

   let col_modified = document.createElement("td");
   let modified = document.createTextNode("modified");
   col_modified.appendChild(modified);
   fila.appendChild(col_modified);

   let col_comics = document.createElement("td");
   let comics = document.createTextNode("comics");
   col_comics.appendChild(comics);
   fila.appendChild(col_comics);

   let col_imagen = document.createElement("td");
   let imagen = document.createTextNode("imagen");
   col_imagen.appendChild(imagen);
   fila.appendChild(col_imagen);

   let col_check = document.createElement("td");
   let check = document.createTextNode("enviar");
   col_check.appendChild(check);
   fila.appendChild(col_check);

   tabla.appendChild(fila);

   /*Recorremos el fichero personajes_filtrados y rellenamos la tabla*/
   for (let i = 0; i < personajes.length; i++) {
        console.log(personajes[i]);
       let fila = document.createElement("tr");

       let col_id = document.createElement("td");
       col_id.setAttribute("style", "border: solid 2px")

       let col_name = document.createElement("td");
       col_name.setAttribute("style", "border: solid 2px");

       let col_modified = document.createElement("td");
       col_modified.setAttribute("style", "border: solid 2px");

       let col_comics = document.createElement("td");
       col_comics.setAttribute("style", "border: solid 2px");

       let col_imagen = document.createElement("td");
       col_comics.setAttribute("style", "border: solid 2px");

       let col_check = document.createElement("td");
       col_check.setAttribute("style", "border: solid 2px");

       let dato_id = document.createTextNode(personajes[i].id);
       let dato_name = document.createTextNode(personajes[i].name);
       let dato_modified = document.createTextNode(personajes[i].modified);
       let dato_comics = document.createTextNode(personajes[i].comics.items);

       let img = document.createElement("img");
       img.src = personajes[i].thumbnail.path + ".jpg";
       img.setAttribute("style", "width:30%; height:30%; margin: auto")

       let check = document.createElement("input");
       check.type = "checkbox";
       check.setAttribute("id", personajes[i].id);

       
       col_id.appendChild(dato_id);
       col_name.appendChild(dato_name);
       col_modified.appendChild(dato_modified);
       col_comics.appendChild(dato_comics);
       col_check.appendChild(check);
       col_imagen.appendChild(img);
       


       fila.appendChild(col_id);
       fila.appendChild(col_name);
       fila.appendChild(col_modified);
       fila.appendChild(col_comics);
       fila.appendChild(col_imagen);
       fila.appendChild(col_check);
       tabla.appendChild(fila);
     }

     div_tabla.appendChild(tabla);
	
}


function guardar_personajesXML() {
    console.log("guardar_personajes")

    personajes_guardar = personajes.map((personaje) => {
		return {
			name: personaje.name,
			id: personaje.id,
			modified: personaje.modified,
			path: personaje.thumbnail.path + ".jpg",
		};
	});

    xhr = new XMLHttpRequest();
    xhr.open("POST", "save_marvel_characters.php");
    xhr.setRequestHeader("Content-Type", "application/personajes_filtrados");

    let personajes_a_enviar = JSON.stringify(personajes_guardar);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resultados.innerHTML = "";
            resultados.innerHTML = "Personajes insertados correctamente XML";
        }
        else if (xhr.status !== 200) {
            console.log("Error")
        }
    }
    xhr.send(personajes_a_enviar);

}


function obtener_personajesFETCH() {
    console.log("obtener_personajesFETCH")

    fetch("get_marvel_characters.php")
		.then((response) => {
			if (response.ok) return response.json();
            
		})
		.then((data) => {
            console.log(data);
            personajes_bbdd = data;
            console.log(personajes_bbdd);
            resultados.innerHTML = "Datos cargados desde BBDD correctamente"
            pintar_2(personajes_bbdd)
		});       

}

function pintar_2(personajes_bbdd) {
    console.log("pintar_2")

	let div_tabla = document.getElementById("div_tabla");
	div_tabla.innerHTML = "";

	let tabla = document.createElement("table");
	tabla.setAttribute("style", "border-collapse: collapse; text-align: center");
	let tr = document.createElement("tr");

	let rotulos = [
		"id",
		"name",
		"modified",
		"path",
	];

	rotulos.forEach((rotulo) => {
		let th = document.createElement("th");
		th.setAttribute("style", "border: solid 2px");
		th.appendChild(document.createTextNode(rotulo));
		tr.appendChild(th);
	});
	tabla.appendChild(tr);

	personajes_bbdd.forEach((personaje) => {

		let tr = document.createElement("tr");
		for (const item in personaje) {
            if (item === "path") {
                let td = document.createElement("td");
                td.setAttribute("style", "border: solid 2px");
                let img = document.createElement("img");
                img.setAttribute("src", personaje["path"])
                img.setAttribute("style", "width:30%; height:30%;")
                td.appendChild(img);
                tr.appendChild(td);

            } else {
                let td = document.createElement("td");
			    td.setAttribute("style", "border: solid 2px");
			    td.appendChild(document.createTextNode(personaje[item]));
			    tr.appendChild(td);
            }
        }
        
		tabla.appendChild(tr);
    });

	div_tabla.appendChild(tabla);
}


function limpiar_tabla() {
    console.log("limpiar_tabla")

    let tabla = document.getElementById("div_tabla");
    tabla.innerHTML = "";
    resultados.innerHTML = "tabla limpiada";
}