window.onload = initListeners;

function getElementById(id) {
    
    let resultado = document.getElementById(id).value;
    console.log(resultado);
    return resultado;
}

let form = getElementById("formulario");

function handleSubmit(e) {
    
    e.preventDefault();

    let nombreDisco = getElementById("impnombreDisco");
    let grupo = getElementById("impgrupo");
    let anioP = getElementById("impanioPublicacion");
    let tipomusica = getElementById("selecttipoMusica");
    let localizacion = getElementById("implocalizacion");
    let prestado = document.querySelector('input[name=opcionseleccionada]:checked').value; 

    
}

function isvalidCampo20(campo) {
    
    let resultado = (campo.length == 20) ? true : false;
    return resultado;
}

function isvalidanio(anio) {
    
    let resultado = (anio >= 1000 && anio <= 9999) ? true : false;
    return resultado;
}

function isvalidlocal(local) {

    let resultado = (local == "" || local == isNaN) ? true : false;
    return resultado;
}

form.addEventListener('submit', handleSubmit);


