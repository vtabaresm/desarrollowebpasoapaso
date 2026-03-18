document.addEventListener("DOMContentLoaded", function () {

  const boton = document.getElementById("boton");
  const texto = document.getElementById("texto");

  boton.addEventListener("click", function () {
    texto.textContent = "El texto se modificó mediante un evento.";
  });

});


