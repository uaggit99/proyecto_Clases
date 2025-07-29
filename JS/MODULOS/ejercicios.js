
import { p_notas, imprimir } from "../FUNCTIONS/ejercicios_F2";

document.getElementById("verificar_nota").addEventListener('click', () => {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);
  const prom = p_notas(n1, n2, n3);

  document.getElementById("result1").textContent = imprimir(prom);
  /*document.getElementById("result1").innerHTML += "<br> promedio : " + prom;*/
});

/*
  modulo.contar_notas(n1,n2,n3);
  modulo.palabra_salir();
  modulo.descuento();
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  if(numeros(num1,num2,num3)){
    let mayor = modulo.numero_mayor(num1, num2, num3);
    document.getElementById("result5").innerHTML =
      "El numero mayor es : " + mayor;
  }else{
    document.getElementById("result5").innerHTML =
      "Los valores NO son diferentes ";
  };*/
