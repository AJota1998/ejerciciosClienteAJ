/**
 * Función que recibe una fecha y calcula el signo del horoscopo egipcio
 * @param {String} fecha 
 */
function horoscopo(fecha) {

    console.log("Entrando en función horoscopo");
    let fnaci = new Date(fecha)
    console.log(fnaci)

    let mes = (fnaci.getMonth() + 1)
    console.log(mes)

    let dia = fnaci.getDate()
    console.log(dia)

    let resultado = numHoroscopo(dia, mes)

    console.log("Saliendo de la función horoscopo con resultado: " + resultado)
    alert("Tu signo es: " + resultado)
}

/**
 * Función que devuelve el signo del horoscopo en un string 
 * al pasarles dia y mes de una fecha
 * @param {Number} dia 
 * @param {Number} mes 
 * @returns {String} 
 */
function numHoroscopo(dia, mes) {

    console.log("Entrando en la función numHoroscopo");
    let resultado

    switch (mes) {
        case 1 :
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Anubis" : "Hijos de Bastset";
            break;
        case 2 :
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Bastset" : "Hijos de Selket";
            break;
        case 3 :
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Selket" : "Hijos de Apep";
            break;
        case 4 : 
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Apep" : "Hijos de Ptah";
            break;
        case 5 :
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Ptah" : "Hijos de Thot";
            break;
        case 6 : 
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Thot" : "Hijos de Isis";
            break;
        case 7 :
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Isis" : "Hijos de Ra";
            break;
        case 8 :
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Ra" : "Hijos de Horus";
            break;
        case 9 : 
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Horus" : "Hijos de Maat";
            break;
        case 10 : 
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Maat" : "Hijos de Osiris";
            break;
        case 11 : 
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Osiris" : "Hijos de Hathor";
            break;
        case 12 :
            (dia >= 1 && dia <= 15)? resultado = "Hijos de Hathor" : "Hijos de Anubis";
            break;
        default: null;
    }
    console.log("Saliendo de la función numHoroscopo con resultado: " + resultado);
    return resultado;
}