/**
 * Función que devuelve el IMC en base al peso y la altura
 * @param {Number} peso 
 * @param {Number} altura
 */
function imc(peso, altura) {
        
    console.log("Entrando en la funcion imc")
    let resultado;
        
        (validarValorPositivo(peso) && validarValorPositivo(altura)) ? resultado = ((peso / (altura * altura)).toFixed(2)) : resultado = "Error en los datos"

    console.log("Saliendo de la función imc con resultado: " + resultado)
    alert("Resultado del calculo del IMC: " + resultado);
}

/**
 * Función que devuelve la frecuecia cardiaca máxima
 * @param {Number} edad 
 */

function frecuenciaCardiaca (edad) {

    console.log("Entrando en la funcion frecuenciaCardiaca")
    let resultado;
    const pulsMax = 220;

        (validarValorPositivo(edad)) ? resultado = (pulsMax - edad) : resultado = "Error en los datos"

    console.log("Saliendo de la funcion frecuenciaCardiaca: " + resultado + " pulsaciones por minuto");
    alert("Resultado del calculo del frecuencia cardiaca: " + resultado + " pulsaciones por minuto");
}

/**
 * Función que devuelve true o false a la comprobación de un numero positivo
 * @param {Number} valor 
 * @returns {boolean}
 */
function validarValorPositivo(valor) {

    console.log("Entrando en la funcion validarValorPositivo")
    console.log("Saliendo la funcion validarValorPositivo")
    
    return (valor != null && valor != undefined && valor > 0) ? true : false;
}