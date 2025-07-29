document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("email").value.trim();
  let clave = document.getElementById("clave").value.trim();
  let mensaje = document.getElementById("mensaje");
  /*mensaje.style.color = "black";*/

  if (name == "") {
    mensaje.textContent = "El campo nombre esta Vacio";
    mensaje.style.color = "red";
    return;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(correo)) {
    mensaje.textContent = "Correo ingresado No valido";
    mensaje.style.color = "red";
    return;
  }

  if (clave.length < 6) {
    mensaje.textContent = "Ingrese minimo 6 caracteres";
    mensaje.style.color = "red";
    mensaje.value='';
    return;
  }

mensaje.textContent = "formulario enviado con Exito";
mensaje.style.color = "green";

});
