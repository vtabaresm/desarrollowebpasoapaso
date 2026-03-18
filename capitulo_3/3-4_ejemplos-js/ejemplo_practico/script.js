/*DOMContentLoaded es un evento del navegador que se dispara cuando 
el documento HTML ha sido completamente cargado y procesado*/
document.addEventListener("DOMContentLoaded", function () {

    //Obtiene los elementos formulario y contenedor para respuesta
    const formulario = document.getElementById("formContacto");
    const contenedorRespuesta = document.getElementById("respuesta");
    
    /*Registra una función que se ejecutará automáticamente cuando 
      ocurra el evento submit sobre el elemento formulario. */
    formulario.addEventListener("submit", function (event) {

        //Obtiene los elementos (campos del formulario)
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Limpia mensajes anteriores
        contenedorRespuesta.innerHTML = "";

        if (nombre === "" || correo === "" || mensaje === "") {

            /*Impide que el formulario se envíe al servidor. 
             Evita que se ejecute el action de formulario antes de que se corrija el error*/
            event.preventDefault();

            const respuesta = document.createElement("p"); //Crea la etiqueta <p>
            respuesta.textContent = "Por favor, complete todos los campos."; //Agrega el texto
            respuesta.style.color = "red"; //Modifica el estilo

            // Insertar el párrafo dentro del div
            contenedorRespuesta.appendChild(respuesta);
        }
  });
});