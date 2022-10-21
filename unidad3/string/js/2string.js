/**
 * Función que valida que una contraseña cumpla unos requisitos
 */

function pass() {

    let passwd = document.getElementById("passw").value; 
    console.log(passwd);

    (passwd == false || isvalidPassword(passwd) == false) ? 
    alert("La contraseña debe tener:\n1 mayúscula\n1 minúscula\n1 número\n1 símbolo\nLongitud entre 8 y 16 carácteres") :
    alert("Contraseña guardada correctamente");

    function isvalidPassword(password) {
    const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    return validacion.test(password)
    }

}