document.getElementById("saludo").innerHTML=" H O L A";


document.getElementById("verificar_p").addEventListener("click", () => {
  document.getElementById("saludo").innerHTML="";
  let imprimir1 = document.getElementById("result1");

  let salida = true;

  while (salida) {
    let ingreso = document.getElementById("palabra").value.toLowerCase();

    if (ingreso === "salir") {
      imprimir1.innerHTML = "Fin de la ejecucion del programa";
      salida = false;
    } else {
      imprimir1.innerHTML = 'palabra = '+ ingreso + ' Ingrese  <strong> salir </strong>  para Terminar';
      document.getElementById("palabra").value = "";         
      break;
    }
  }
});
