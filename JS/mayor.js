const verificar6 = document.getElementById("verificarM");

verificar6.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("n1").value);
  const num2 = parseFloat(document.getElementById("n2").value);
  const num3 = parseFloat(document.getElementById("n3").value);

  const result6 = document.getElementById("resultadoM");

  if (num1 >num2) {
    if (num1> num3) {
      result6.innerHTML="El numero mayor es "+num1;
    }
  } else if (num2 >num1) {
    if (num2 >num3) {
      result6.innerHTML="El numero mayor es "+num2;
    } else {
      result6.innerHTML="El numero mayor es "+num3;
    }
  }
});
