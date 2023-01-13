/*
Crea de manera dinámica (es decir, al cargarse la página) el formulario que definimos en el tema anterior (tarea U4T1).
Ten en cuenta que el formulario deberá tener los atributos necesarios para que, al crearse, tenga la misma funcionalidad que el que creaste en html.
No olvides añadir las etiquetas <label> a cada uno de los elementos.
*/

window.addEventListener("load", formulario, false);

function formulario() {
    console.log("Entrando en la función formulario");

    let miformulario = document.createElement("form");
    document.body.appendChild(miformulario);

    miformulario.appendChild(crearLabel("Disco"));
    miformulario.appendChild(crearInput("text"));
    miformulario.appendChild(crearLabel("Grupo de Música o cantante"));
    miformulario.appendChild(crearInput("text"));
    miformulario.appendChild(crearLabel("Año de publicación"));
    miformulario.appendChild(crearInput("Date"));
    miformulario.appendChild(crearLabel("Seleccione tipo de música"));
    miformulario.appendChild(tipoMusica());
    miformulario.appendChild(crearLabel("Localización"));
    miformulario.appendChild(crearInput("Number"));
    miformulario.appendChild(crearLabel("Prestador"));
    miformulario.appendChild(prestado());
    


    console.log("Saliendo de la función formulario");
}


function crearLabel(nombre) {
    console.log("Entrando en la función crearLabel");

    let Etiqueta = document.createElement("label");
    let texto = document.createTextNode(nombre);
    console.log(Etiqueta);

    console.log("Saliendo de la función crearLabel");
    return Etiqueta.appendChild(texto);
}


function crearInput(tipo) {
    console.log("Entrando en la función crearInput");

    let Etiqueta = document.createElement("input");
    let att = document.createAttribute("type");
    att.value = tipo;
    Etiqueta.setAttributeNode(att);
    console.log(Etiqueta);

    console.log("Saliendo de la función crearInput");
    return Etiqueta;
}

function tipoMusica() {
    console.log("Entrando en la función crearSelect");

    let select = document.createElement("select");
 
    let option1 = document.createElement("option");
    option1.setAttribute("value", "value1");
    let option1Texto = document.createTextNode("Rock");
    option1.appendChild(option1Texto);
 
    let option2 = document.createElement("option");
    option2.setAttribute("value", "value2");
    let option2Texto = document.createTextNode("Pop");
    option2.appendChild(option2Texto);
 
    let option3 = document.createElement("option");
    option3.setAttribute("value", "value3");
    let option3Texto = document.createTextNode("Punk");
    option3.appendChild(option3Texto);

    let option4 = document.createElement("option");
    option4.setAttribute("value", "value4");
    let option4Texto = document.createTextNode("Indie");
    option4.appendChild(option4Texto);

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    
    console.log("Saliendo de la función crearSelect");
    return select;
}

function prestado() {
    console.log("Entrando en la función prestado");

    let select = document.createElement("select");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "value1");
    let option1Texto = document.createTextNode("false");
    option1.appendChild(option1Texto);

    let option2 = document.createElement("option");
    option2.setAttribute("value", "value2");
    let option2Texto = document.createTextNode("true");
    option2.appendChild(option2Texto);

    select.appendChild(option1);
    select.appendChild(option2);

    console.log("Saliendo de la función prestado");
    return select;
}
