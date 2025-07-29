export function p_notas(n1, n2, n3) {
  return ((n1 + n2 + n3) / 3).toFixed(2);
}
export function imprimir(promedio) {
  if (promedio >= 4) {
    return "! promocionado !";
  } else if (promedio < 4 && promedio >= 3) {
    return "Regular";
  } else {
    return "Reprobado";
  }
}

export function contar_notas(a, b, c) {
  /*let a = parseFloat(document.getElementById("nota1").value);
  let b = parseFloat(document.getElementById("nota2").value);
  let c = parseFloat(document.getElementById("nota3").value);*/
  let notas = [a, b, c];
  let c1 = 0;
  let c2 = 0;
  for (let x = 0; x < notas.length; x++) {
    if (notas[x] <= 5) {
      if (notas[x] >= 4) {
        c1++;
      } else {
        c2++;
      }
    }
  }
  document.getElementById(
    "result2"
  ).textContent = `Notas mayores a 4 son ${c1} y Notas menores a 4 son ${c2}`;
}

export function palabra_salir() {
  let salida = true;

  while (salida) {
    let ingreso = document.getElementById("palabra").value.toLowerCase();

    if (ingreso === "salir") {
      document.getElementById("result3").innerHTML =
        "Fin de la ejecucion del programa";
      salida = false;
    } else {
      document.getElementById("result3").innerHTML =
        "palabra = " +
        ingreso +
        " Ingrese  <strong> salir </strong>  para Terminar";
      document.getElementById("palabra").value = "";
      break;
    }
  }
}

export function descuento() {
  let pago = 0;
  let valor = parseFloat(document.getElementById("descuento").value);
  if (valor > 200) {
    pago = valor - valor * 0.2;
    document.getElementById("result4").innerHTML =
      "Total a pagar : $" + pago.toFixed(2) + " pesos";
  } else {
    document.getElementById("result4").innerHTML =
      " Gracias por su compra Total  $" + valor.toFixed(2) + " pesos";
  }
}

export function numeros(num1, num2, num3) {
  /*const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);*/
  let validar = false;
  if (num1 != num2 && num1 != num3 && num2 != num3) {
    return true;
  } else {
    return validar;
  }
}

export function numero_mayor(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
  } else if (b > a) {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}
/*
export{
  p_notas,
  imprimir,
  contar_notas,
  palabra_salir,
  descuento,
  numeros
};*/
