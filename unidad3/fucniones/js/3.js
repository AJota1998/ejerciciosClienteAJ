function horoscopo(fecha) {

    let fnaci = new Date(fecha)
    console.log(fnaci)

    let mes = (fnaci.getMonth() + 1)
    console.log(mes)

    let dia = fnaci.getDate()
    console.log(dia)

    let valor = numHoroscopo(dia, mes)
    console.log(valor)

    let resultado = signo(valor)
    console.log(resultado)

    alert(resultado)
}

function numHoroscopo(dia, mes) {
debugger
    let resultado

    switch (dia, mes) {
        case ((dia >= 16 && dia <= 31 && mes == 1) || (dia >= 1 && dia <= 15 && mes == 2)) :
            resultado = 1;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 2) || (dia >= 1 && dia <= 15 && mes == 3)) :
            resultado = 2;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 3) || (dia >= 1 && dia <= 15 && mes == 4)) :
            resultado = 3;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 4) || (dia >= 1 && dia <= 15 && mes == 5)) : 
            resultado = 4;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 5) || (dia >= 1 && dia <= 15 && mes == 6)) :
            resultado = 5;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 6) || (dia >= 1 && dia <= 15 && mes == 7)) : 
            resultado = 6;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 7) || (dia >= 1 && dia <= 15 && mes == 8)) :
            resultado = 7;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 8) || (dia >= 1 && dia <= 15 && mes == 9)) :
            resultado = 8;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 9) || (dia >= 1 && dia <= 15 && mes == 10)) : 
            resultado = 9;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 10) || (dia >= 1 && dia <= 15 && mes == 11)) : 
            resultado = 10;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 11) || (dia >= 1 && dia <= 15 && mes == 12)) : 
            resultado = 11;
            break;
        case ((dia >= 16 && dia <= 31 && mes == 12) || (dia >= 1 && dia <= 15 && mes == 1)) :
            resultado = 12;
            break;
        default: null;
    }
    return resultado;
}

function signo(resultado) {
    
    let signo
    (resultado == 1)? signo = "Bastset, la diosa del gato" : 
    (resultado == 2)? signo = "Selket, la madre" :
    (resultado == 3)? signo = "Hijos de Apep, la serpiente sagrada" :
    (resultado == 4)? signo = "Hijos de Ptah, el que abre" :
    (resultado == 5)? signo = "Hijos de Atum, el dios del sol" :
    (resultado == 6)? signo = "Hijos de Isis, la media luna" :
    (resultado == 7)? signo = "Hijos Ra, el sol" :
    (resultado == 8)? signo = "Hijos de Horus, el halcón" :
    (resultado == 9)? signo = "Hijos de Maat, la justicia" :
    (resultado == 10)? signo = "Hijos de Osiris, dios de la agricultura y la religión" :
    (resultado == 11)? signo = "Hijos de Hato, madre de la femineidad" :
    (resultado == 12)? signo = "Hijos de Anubis, el chacal" :
    resultado = null;
    return resultado;
}