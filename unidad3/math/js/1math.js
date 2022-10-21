/**
 * Función que devuelve potencia, raíz, redondeo o valores trigonométricos 
 * según el número que introduzca el usuario
 */

function juego() {

    let numero = prompt("Introduzca:\n1 para Potencia\n2 para Raíz\n3 para Redondeo\n4 para Trigonometría");
    console.log(numero);

    if (numero == 1) {
        let base = parseInt(prompt("Introduzca la base"));
        let exponente = parseInt(prompt("Introduzca el exponente"));
        let resultado1 = "La potencia de " + base + " por " + exponente + " es: " + (Math.pow(base,exponente));
            console.log(resultado1);
            alert(resultado1);

    } else if (numero == 2) {
        let numPositivo = parseInt(prompt("Introduzca un número positivo"));
            if (numPositivo < 0) {
                alert("Número negativo no válido");
            } else {
                let resultado2 = "La raíz de " + numPositivo + " es " + (Math.sqrt(numPositivo));
                    concole.log(resultado2);
                    alert(resultado2);
            }

    } else if (numero == 3) {
        let decimal = prompt("Introduzca un número decimal, por ejemplo 4.5");
        let resultado3 = "Redondeo al entero bajo: " + (Math.floor(decimal)) + " Redondeo al entero alto: " + (Math.ceil(decimal));
            console.log(resultado3);
            alert(resultado3);

    } else if (numero == 4) {
        let angulo = parseInt(prompt("Introduzca un ángulo entre 0 y 360")); 
            if (angulo < 0 || angulo > 360) {
                alert("Ángulo introducido no válido");
            } else {
                let resultado4 = "Seno: " + (Math.sin(angulo)) + " Coseno: " + (Math.cos(angulo)) + " Tangente: " + (Math.tan(angulo));
                    console.log(resultado4);
                    alert(resultado4);
            }
    } else {
        alert("Número introducido no válido")
    }

}