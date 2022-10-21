/**
 * Función que al introducir el valor de un radio devuelve 
 * el valor, el diámetro, el perímetro de la circunferencia, el área del círculo
 * el área de la esfera, y el valor de la esfera
 */

function radio() {

    let radio = prompt("Introduzca el valor del radio");
    const $nPI = Math.PI;

    let valor = radio;
    let diametro = (radio*2);
    let perimetro = (diametro*$nPI);
    let areaCirc = ($nPI*valor*valor);
    let areaEsf = (4*$nPI*(radio*radio));
    let volumenEsf = (4/3*$nPI*(valor*valor*valor));

    let resultado = ("Valor: " + radio + "\nDiámetro: " + diametro + "\nPerímetro: " + perimetro.toFixed(2) +
    "\nÁrea circulo: " + areaCirc.toFixed(2) + "\nÁrea de la esfera: " + areaEsf.toFixed(2) + "\nVolumen de la esfera: " + volumenEsf.toFixed(2));
    
    alert(resultado);

}