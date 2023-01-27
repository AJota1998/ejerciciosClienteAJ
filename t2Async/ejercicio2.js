let peticion_http;

window.onload = boton;

    function carga_contenido() {
      
        peticion_http = new XMLHttpRequest();

      if (peticion_http) {

        let valor_input = document.getElementById("input").value;
        console.log(valor_input);
        peticion_http.onreadystatechange = muestra_contenido;
        peticion_http.open("GET", `localidad.php?localidad=${valor_input}`);
        peticion_http.send();
      }
    }

    function muestra_contenido() {
      if (peticion_http.readyState === 4) {
        if (peticion_http.status === 200) {

          let div_a_pintar = document.getElementById("resultado");
          div_a_pintar.innerHTML = peticion_http.responseText;
          console.log(peticion_http.responseText);

            if (peticion_http.responseText === "SI") {
                div_a_pintar.style.color = "green";
            } else if (peticion_http.responseText === "NO") {
                div_a_pintar.style.color = "red";
            } else {
                alert("Respuesta inesperada");
            }
        }
      }
    }

    function boton() {
        let el_boton = document.getElementById("elboton");
        el_boton.addEventListener("click", carga_contenido, false);
      }
