let valor = false;

function validar(a, b, c) {
  if (a > 5 || a < 0 || b > 5 || b < 0 || c > 5 || c < 0) {
    return true;
  }
}

document.getElementById("verificar_nota").addEventListener("click", () => {
  event.preventDefault();

  let a = parseFloat(document.getElementById("nota1").value.trim());
  let b = parseFloat(document.getElementById("nota2").value.trim());
  let c = parseFloat(document.getElementById("nota3").value.trim());
  let mensaje = document.getElementById("mensaje");

  let texto = "Ingrese valores entre 0.0 y 5.0";

  valor = validar(a, b, c);

  if (valor) {
    mensaje.textContent = texto;
    return;
  } else {
    mensaje.textContent = "";
    let promedio = ((a + b + c) / 3).toFixed(2);

    if (promedio >= 4) {
      document.getElementById("result1").innerHTML = " ! promocionado ! <br>";
    } else if (promedio < 4 && promedio >= 3) {
      document.getElementById("result1").innerHTML = " Regular <br>";
    } else {
      document.getElementById("result1").innerHTML = "Reprobado <br>";
    }
    document.getElementById("result1").innerHTML += "promedio : " + promedio;
  }
});

document.getElementById("conteo").addEventListener("click", () => {
  event.preventDefault();
  let a = parseFloat(document.getElementById("nota1").value.trim());
  let b = parseFloat(document.getElementById("nota2").value.trim());
  let c = parseFloat(document.getElementById("nota3").value.trim());
  let mensaje = document.getElementById("mensaje");

  let texto = "Ingrese valores entre 0.0 y 5.0";

  valor = validar(a, b, c);
  if (valor) {
    mensaje.textContent = texto;
    return;
  } else {
    mensaje.textContent="";
    let notas = [a, b, c];
    let c1 = 0;
    let c2 = 0;
    for (let x = 0; x < notas.length; x++) {
      if (notas[x] >= 4) {
        c1++;
      } else {
        c2++;
      }
    }
    document.getElementById(
      "result2"
    ).textContent = `Notas mayores a 4 son ${c1} y Notas menores a 4 son ${c2}`;
  }
});
