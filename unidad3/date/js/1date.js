/**
 * Función que devuelve los días que faltan hasta el fin de curso desde la fecha de hoy. 
 */
function diasfaltan() {

let hoy = new Date();
console.log(hoy);
let fincurso = new Date(2023, 06, 24);

let milisegundos = (fincurso - hoy);
let dias = (milisegundos /1000 /60 /60 /24)
console.log(dias)

alert(parseInt(dias) + ' dias de diferencia');

}
