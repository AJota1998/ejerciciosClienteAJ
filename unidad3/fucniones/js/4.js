function cadena(cadena, salto) {
    
    let indice = salto;
    console.log(indice)
    console.log(cadena)
    console.log(salto)
    do {

        if (cadena[indice] != Number) {
            console.log(cadena[indice]);
            cadena[indice].toLowerCase(cadena[indice]);
            console.log(cadena[indice]);
        }
        indice += salto;
        console.log(indice);

    } while (indice < cadena.length);

    alert("Cadena convertida: " + cadena);
    return cadena;
}
