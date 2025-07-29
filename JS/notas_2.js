const verificarNotas = document.getElementById("verificarbtn");

verificarNotas.addEventListener("click", () => {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  const result5 = document.getElementById("resultadoN");
  const promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio <= 5 && promedio >= 4) {
    result5.innerHTML="PROMOCIONADO";
  } else if (promedio < 4 && promedio >= 3) {
    result5.innerHTML="REGULAR";;
  } else if (promedio < 3) {
    result5.innerHTML="REPROBADO";;
  } else {
    result5.innerHTML="! Error ! PROMEDIO  "+promedio.toFixed(2);
  }

  
});
