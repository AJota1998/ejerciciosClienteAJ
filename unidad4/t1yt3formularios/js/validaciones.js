/**
 * Función para obtener el valor de los elementos del formulario 
 * @param {String} id 
 * @returns {String}
 */
function getElementById(id) {
   
    console.log("Entrando en la función getElementById")

    let resultado = document.getElementById(id).value;
    console.log(resultado);

    console.log("Saliendo de la función getElementById con resultado: " + resultado);
    return resultado;
}

// Obtenemos el formulario
let form = document.getElementById('formulario');

/**
 * Función para validar los campos del formulario
 * @param {Event} e 
 */
function handleSubmit(e) {
    
    e.preventDefault();
    console.log("Entrando en la función handleSubmit");

    let nombreDisco = getElementById("impnombreDisco");
    let grupo = getElementById("impgrupo");
    let anioP = getElementById("impanioPublicacion");
    let tipomusica = getElementById("selecttipoMusica");
    let localizacion = getElementById("implocalizacion");
    let prestado = document.querySelector('input[name=opcionseleccionada]:checked').value;

    (nombreDisco == false || isvalidCampo20(nombreDisco) == false) ? alert("El campo 'Nombre Disco' debe tener 20 dígitos de longitud") :
    (grupo == false || isvalidCampo20(grupo) == false) ? alert("El campo 'Grupo' debe tener 20 dígitos de longitud") :
    (anioP == false || isvalidanio(anioP) == false) ? alert("EL campo año de tener 4 dígitos") : 
    (localizacion == false || isvalidlocal(localizacion) == false) ? alert("El campo localizacion tiene que ser un numero o estar vacio") :
    (prestado === "true" || prestado === "false") ? alert("Formulario Correcto") :
    alert("Debe seleccionar una opción para el campo 'prestado");

    console.log("Saliendo de la fución handleSubmit");
}

/**
 * Validación de un campo con 20 caracteres
 * @param {String} campo 
 * @returns {boolean}
 */
function isvalidCampo20(campo) {
    
    console.log("Entrando en la función isvalidCampo20");
    let resultado = (campo.length == 20) ? true : false;
    console.log("Saliendo de la función isvalidCampo20");
    return resultado;
}

/**
 * Función que valida el campo año de publicación
 * @param {String} anio 
 * @returns {boolean}
 */
function isvalidanio(anio) {
    
    console.log("Entranedo en la función isvalidanio");
    let resultado = (anio >= 1000 && anio <= 9999) ? true : false;
    console.log("Saliendo de la función isvalidanio");
    return resultado;
}

/**
 * FUnción que valida el campo año de localización
 * @param {String} local 
 * @returns {boolean}
 */
function isvalidlocal(local) {

    console.log("Entrando en la función isvalidlocal");
    let resultado = (local == "" || local != isNaN ) ? true : false;
    console.log("Saliendo de la función isvalidlocal");
    return resultado;
}

// añadiendo el evento de submit al formulario
form.addEventListener('submit', handleSubmit);


