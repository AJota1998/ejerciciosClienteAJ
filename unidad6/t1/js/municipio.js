/*
1- El número de párrafos de la página.
2- El texto del segundo párrafo.
3- El número de enlaces de la página.
4- La dirección del primer enlace.
5- La dirección del penúltimo enlace.
6- El número de enlaces que apuntan a /wiki/Municipio
7- El número de enlaces del primer párrafo.
*/

//Función 1
function numeroP() {
    console.log("Entrando en la función numeroP");
    let numeroP = document.getElementsByTagName("p");
    console.log("Saliendo de la función numeroP con resultado: " + numeroP.length + " numero de párrafos");
}

numeroP();


//Función 2
function textoP2() {
    console.log("Entrando en la función textoP2");
    let parrafos = document.getElementsByTagName("p");
    let valor = parrafos[1].textContent
    console.log("Saliendo de la función textoP2 con resultado: " + valor);
}

textoP2();


//Función 3
function numEnlaces() {
    console.log("Entrando en la función numEnlaces");
    let numA = document.getElementsByTagName("a");
    console.log("Saliendo de la función numEnlaces con resultado: " + numA.length + " enlaces");
}

numEnlaces();


//Función 4
function direccion1erEnlace() {
    console.log("Entrando en la función direccion1erEnlace");
    let numA = document.getElementsByTagName("a");
    let valor = numA[0].getAttribute("href");
    let resultado = valor.valueOf();
    console.log("Saliendo de la función direccion1erEnlace con resultado: " + resultado);
}

direccion1erEnlace()


//Función 5
function direccionPenulEnlace() {
    console.log("Entrando en la función direccionPenulEnlace");
    let numA = document.getElementsByTagName("a");
    let valor = numA[numA.length - 2].getAttribute("href");
    let resultado = valor.valueOf();
    console.log("Saliendo de la función direccionPenulEnlace con resultado: " + resultado);
}

direccionPenulEnlace();


//Función 6
function numEnlacesWikiMun() {
    console.log("Entrando en la función numEnlacesWikiMun");
    let NumMunicipios = 0;
    let numA = document.getElementsByTagName("a");
    for (let i = 0; i < numA.length; i++) {
        numA[i].textContent === "municipio" ? NumMunicipios++ : null; 
    }
    console.log("Saliendo de la función numEnlacesWikiMun con resultado: " + NumMunicipios + " enlacesWiki/Mun");
}

numEnlacesWikiMun();


//Función 7 
function numEnlaces1erP() {
    console.log("Entrando en la función numEnlaces1erP");
    let p = document.getElementsByTagName("p");
    let p1 = p[0];
    let enlaces = p1.getElementsByTagName("a");
    let resultado = enlaces.length;
    console.log("Saliendo de la función numEnlaces1erP con resultado: " + resultado + " enlaces en el 1er P");
}

numEnlaces1erP();
