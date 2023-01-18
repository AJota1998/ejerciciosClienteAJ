let formulario = document.getElementById('formulario');

let btnTitulo = document.getElementById('btnTitulo');
btnTitulo.addEventListener('click', crearTitulo, false);

let btnTexto = document.getElementById('btnTexto');
btnTexto.addEventListener('click', crearTexto, false);

let btnPassword = document.getElementById('btnPassword');
btnPassword.addEventListener('click', crearPassword, false);

let btnArea = document.getElementById('btnArea');
btnArea.addEventListener('click', crearArea, false);

let btnLabel = document.getElementById('btnLabel');
btnLabel.addEventListener('click', crearLabel, false);

let btnImagen = document.getElementById('btnImagen');
btnImagen.addEventListener('click', crearImagen, false);

let btnCheck = document.getElementById('btnCheck');
btnCheck.addEventListener('click', crearCheck, false);

let btnRadio = document.getElementById('btnRadio');
btnRadio.addEventListener('click', crearRadio, false);

let btnSumbit = document.getElementById('btnSubmit');
btnSumbit.addEventListener('click', crearSubmit, false);


function crearTitulo() {
    console.log("Entrando en la función crearTitulo");

    let lista = document.getElementsByTagName('h2');
    
    if(lista.length === 0 && formulario.hasChildNodes() === false) {
    let titulo = prompt("Introduzca el titulo para su formulario");

    let Etiqueta = document.createElement("h2");
    let texto = document.createTextNode(titulo);
    Etiqueta.appendChild(texto);
    formulario.appendChild(Etiqueta);
    } else {
        alert('No puedes crear más de un título o no es el primer elemento')
    }
    console.log("Saliendo de la función crearTitulo");
}

function crearTexto() {
    console.log("Entrando en la función crearTexto");

    let nombre = prompt("Introduzca el nombre del input")
    let Etiqueta = document.createElement("input");
    let att = document.createAttribute("type");
    att.value = "text";
    let name = document.createAttribute("name");
    name.value = nombre;
    Etiqueta.setAttributeNode(att);
    Etiqueta.setAttributeNode(name);
    formulario.appendChild(Etiqueta);

    console.log("Saliendo de la función crearTexto");
}

function crearPassword() {
    console.log("Entrando en la función crearPassword");

    let nombre = prompt("Introduzca el nombre del input")
    let Etiqueta = document.createElement("input");
    let att = document.createAttribute("type");
    att.value = "password";
    let name = document.createAttribute("name");
    name.value = nombre;
    Etiqueta.setAttributeNode(att);
    Etiqueta.setAttributeNode(name);
    formulario.appendChild(Etiqueta);

    console.log("Saliendo de la función crearPassword");
}

function crearArea() {
    console.log("Entrando en la función crearArea");

    let nombre = prompt("Introduzca el nombre del Área de texto");    
    let Etiqueta = document.createElement("textarea");
    let name = document.createAttribute("name");
    name.value = nombre;
    Etiqueta.setAttributeNode(name);
    let columnas = document.createAttribute("cols");
    columnas.value = "40"
    Etiqueta.setAttributeNode(columnas);
    let filas = document.createAttribute("rows");
    filas.value = "5"
    Etiqueta.setAttributeNode(filas);
    formulario.appendChild(Etiqueta);

    console.log("Saliendo de la función crearArea");
}

function crearLabel() {
    console.log("Entrando en la función crearLabel");

    let referido = prompt("¿A qué input va referido?");
    let texto = prompt("Introduzca el nombre de la etiqueta");
    let Etiqueta = document.createElement("label");
    let nodoTexto = document.createTextNode(texto);
    Etiqueta.appendChild(nodoTexto);
    let ref = document.createAttribute("for");
    ref.value = referido;
    Etiqueta.setAttributeNode(ref);
    formulario.appendChild(Etiqueta);

    console.log("Saliendo de la función crearLabel");
}

function crearImagen() {
    console.log("Entrando en la función crearImagen");

    /* Para ver que funciona introducir img/ejemplo.png */
    let ruta = prompt("¿Qué ruta tiene la imagen?");
    let Etiqueta = document.createElement("img");
    let src = document.createAttribute("src");
    src.value = ruta;
    Etiqueta.setAttributeNode(src);
    formulario.appendChild(Etiqueta);

    console.log("Saliendo de la función crearImagen");
}

function crearCheck() {
    console.log("Entrando en la función crearCheck");

    let name = prompt("Introduzca el nombre");
    let value = prompt("Introduzca el valor");
    let texto = prompt("Introduzca el texto");

    let Etiqueta = document.createElement("input");
    let tipo = document.createAttribute("type");
    tipo.value = "checkbox"

    let label = document.createElement("label");
    let textolabel = document.createTextNode(texto);
    label.appendChild(textolabel);

    let atributoName = document.createAttribute("name");
    atributoName.value = name;

    let atributoValue = document.createAttribute("value");
    atributoValue.value = value;

    Etiqueta.setAttributeNode(tipo);
    Etiqueta.setAttributeNode(atributoName);
    Etiqueta.setAttributeNode(atributoValue);
    formulario.appendChild(Etiqueta);
    formulario.appendChild(label);

    console.log("Saliendo de la función crearCheck");
}

function crearRadio() {
    console.log("Entrando en la función crearRadio");

    let name = prompt("Introduzca el nombre");
    let value = prompt("Introduzca el valor");
    let texto = prompt("Introduzca el texto");

    let Etiqueta = document.createElement("input");
    let tipo = document.createAttribute("type");
    tipo.value = "radio"

    let label = document.createElement("label");
    let textolabel = document.createTextNode(texto);
    label.appendChild(textolabel);

    let atributoName = document.createAttribute("name");
    atributoName.value = name;

    let atributoValue = document.createAttribute("value");
    atributoValue.value = value;

    Etiqueta.setAttributeNode(tipo);
    Etiqueta.setAttributeNode(atributoName);
    Etiqueta.setAttributeNode(atributoValue);
    formulario.appendChild(Etiqueta);
    formulario.appendChild(label);

    console.log("Saliendo de la función crearRadio");
}

function crearSubmit() {
    console.log("Entrando en la función crearSubmit");

    let nombre = prompt("Introduzca el nombre del input");
    let valor = prompt("Introduzca el valor del input");

    let Etiqueta = document.createElement("input");
    let att = document.createAttribute("type");
    att.value = "submit";

    let name = document.createAttribute("name");
    name.value = nombre;

    let atributoValor = document.createAttribute("value");
    atributoValor.value = valor;

    Etiqueta.setAttributeNode(att);
    Etiqueta.setAttributeNode(name);
    Etiqueta.setAttributeNode(atributoValor);
    formulario.appendChild(Etiqueta);

    console.log("Saliendo de la función crearSubmit");
}



