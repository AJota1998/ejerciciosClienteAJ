/*
Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.
Una vez cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.
Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando pulses el primer botón
borre el primer elemento de la lista y cuando pulses el último borre el último elemento de la lista.
*/

let btnIntroducir = document.getElementById("datos");
btnIntroducir.addEventListener("click", add, false);

function add() {
    console.log("Entrando en la función add");

    let texto = prompt("Introduzca un texto para guardar como elemento de la lista");

    let elemento = document.createElement("li");
    let nodotexto = document.createTextNode(texto);
    elemento.appendChild(nodotexto);

    let lista = document.getElementById("lista");
    lista.appendChild(elemento);

    console.log("Saliendo de la función add");
}


let btnDeletefirst = document.getElementById("1li");
btnDeletefirst.addEventListener("click", deletefirst, false);

function deletefirst() {
    console.log("Entrando en la función deletefirst");

    let lista = document.getElementById("lista");
    let elementoBorrar = lista.firstChild;
    lista.removeChild(elementoBorrar);

    console.log("Saliendo de la función deletefirst");
}


let btnDeletelast = document.getElementById("2li");
btnDeletelast.addEventListener("click", deletelast, false);

function deletelast() {
    console.log("Entrando en la función deletelast");

    let lista = document.getElementById("lista");
    let elementoBorrar = lista.lastChild;
    lista.removeChild(elementoBorrar);

    console.log("Saliendo de la función deletelast");
}
