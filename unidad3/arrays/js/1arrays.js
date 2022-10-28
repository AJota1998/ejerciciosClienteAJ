let paises = ['francia', 'inglaterra', 'italia', 'españa', 'alemania', 'belgica', 'holanda', 'portugal']

let opcion = prompt("opciones:\n1 Mostrar número de paises\n2 Mostrar listado de países\n" + 
"3 Mostrar intervalo de países\n4 Añadir un país\n5 Borrar un país\n6 Consultar un país")

let opcionSecundaria
let paisAdd
let paisDelete
let consultarPais

if (opcion == 1) {
    numElementos(paises)

} else if (opcion == 2) {
    opcionSecundaria = prompt("Introduzca:\n1 orden actual\n2 orden al revés\n3 orden alfabético")
        if (opcionSecundaria == 1) {
            elementos(paises)
        } else if (opcionSecundaria == 2) {
            elementosInverso(paises)
        } else if (opcionSecundaria == 3) {
            ordenar(paises)
        } else {
            alert("Número introducido no válido")
        }

} else if (opcion == 3) {
    opcionSecundaria = prompt("Introduzca el intervalo, ejemplo 2-4, 1-3, 2-3")
        intervaloElementos(paises)

} else if (opcion == 4) {
    opcionSecundaria = prompt("Introduca:\n1 añadir al principio\n2 añadir al final")
        if (opcionSecundaria == 1) {
            paisAdd = prompt("Introduzca el elemento a añadir al principio")
                addPrincipio(paises)
        } else if (opcionSecundaria == 2) {
            paisAdd = prompt("Introduzca el elemento a añadir al final")
                addFinal(paises)
        }

} else if (opcion == 5) {
    opcionSecundaria = prompt("Introduzca:\n1 borrar al principio\n2 borrar al final")
        if (opcionSecundaria == 1) {
            deletePrincipio(paises)
        } else if (opcionSecundaria == 2) {
            deleteFinal(paises)
        } else {
            alert("Número incorrecto")
        }

} else if (opcion == 6) {
    opcionSecundaria = prompt("Introduzca:\n1 consultar por posición\n2 consultar por nombre")
        if (opcionSecundaria == 1) {
               consultPosicion(paises)
        } else if (opcionSecundaria == 2) {
                consultNombre(paises)
        }

} else if (opcion > 6 || opcion < 1) {
    alert("Número introducido erróneo")
}



/**
 * Devuelve el número de elementos del array
 */

function numElementos(paises) {

    let array = paises 
    let numElem = array.length
    alert("Número de elementos: " + numElem)

}

/**
 * Devuelve cada elemento del array
 */

function elementos(paises) {

    let array = paises
    let cadenapaises = "Países: "

    for(let i = 0; i<= array.length-1; i++) {
        cadenapaises += array[i] + ", " 
    }

    alert(cadenapaises)

}

/**
 * Devuelve los elementos en sentido inverso
 */

function elementosInverso(paises) {

    let array = paises
    let arrayVuelta = array.reverse()

    elementos(arrayVuelta)

}

/**
 * Devuelve el array ordenado alfabéticamente
 */

function ordenar(paises) {

    let array = paises
    let arrayOrdenado = array.sort()

    elementos(arrayOrdenado)

}

/**
 * Añade un elemento al principio
 */

function addPrincipio(paises) {

    let array = paises
    array.unshift(paisAdd)
    elementos(array)

}

/**
 * Añade un elemento al final
 */

function addFinal(paises) {

    let array = paises
    array.push(paisAdd)
    elementos(array)

}

/**
 * Borra el elemento al principio 
 */

function deletePrincipio(paises) {

    let array = paises 
    alert("Borrado: " + array.shift())   

}

/**
 * Borra el elemento al final
 */

function deleteFinal(paises) {

    let array = paises 
    alert("Borrado: " + array.pop())   

}

/**
 * Muestra el elemento en la posición indicada por el usuario
 */

function consultNombre(paises) {

    let pais = prompt("Introduce el nombre del país para saber su posicion")

    let array = paises; 
    let nombre = array.indexOf(pais)
    alert(nombre)
    console.log(array)

}

/**
 * Muestra la posición donde se encuentra el elemento indicado por el usuario
 */

function consultPosicion(paises) {

    let pais = prompt("Introduce el índice del elemento a mostrar")

    let array = paises
    let resultado = array[pais]
    alert(resultado)

}

/**
 * Muestra los elementos comprendidos en el intervalo introducido por el usuario
 */

function intervaloElementos(paises) {

    let array = paises
    let separado = opcionSecundaria.split("-")
    let pos0 = separado[0]
    let pos1 = separado[1]
    let intervalo = array.slice(pos0, pos1)
    
    elementos(intervalo)

}