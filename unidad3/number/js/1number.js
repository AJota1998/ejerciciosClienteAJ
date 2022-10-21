/**
 * Función que devuelve el número con 4 décimales, en binario, en octal y en hexadecimal 
 */

function numero() {

    let numero = parseInt(prompt("Introduzca un número entero"));
    console.log(numero);

    if (numero >= 0) {
        let numExpon = numero.toExponential();
        let format4dec = numero.toFixed(4);
        let numBinario = numero.toString(2);
        let numOctal = numero.toString(8);
        let numHexad = numero.toString(16);
        let resultado = "Número introducido: " + numero + "\nValor exponencia: " + numExpon + "\n4 decimales: " + format4dec + 
        "\nBinario: " + numBinario + "\nOctal: " + numOctal + "\nHexadecimal: " + numHexad;
            console.log(resultado);
            alert(resultado);

    } else {
        alert("Número introducido no válido");
    } 

   

}