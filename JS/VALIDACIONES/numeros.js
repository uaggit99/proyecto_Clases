document.getElementById("verificarM").addEventListener("click", () => {
  event.preventDefault();
  let a = parseFloat(document.getElementById("n1").value.trim());
  let b = parseFloat(document.getElementById("n2").value.trim());
  let c = parseFloat(document.getElementById("n3").value.trim());
  let resultado= document.getElementById("resultadoM");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultado.innerHTML= "Valores no numericos";
    return;
  }
  if((a==b) || (a==c) || (b==c)){
    resultado.innerHTML= "los valores debe ser Diferentes";
    return;
  }
  if (a >b) {
    if (a> c) {
      resultado.innerHTML="El numero mayor es "+ a;
    }
  } else if (b >a) {
    if (b>c) {
      resultado.innerHTML="El numero mayor es "+b;
    } else {
      resultado.innerHTML="El numero mayor es "+c;
    }
  }

});
