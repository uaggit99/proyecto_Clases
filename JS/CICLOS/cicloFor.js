//ciclo while
let mensaje = "Numeros de 1 al 5 con FOR <br> <br>";
let suma = 0;

for (let i = 1; i <= 5; i++) {
  mensaje += "Numero : " + i + "<br>";
  suma += i;
}
let mensaje2 = "la suma de numeros de 1 al 5 es: " + suma;

document.getElementById("resultadoFor").innerHTML = mensaje;
document.getElementById("suma").innerHTML = mensaje2;

// ciclo while

let mensajeW = "Numeros de 1 al 5 con WHILE <br> <br>";
let sumaW = 0;
let x = 1;
while (x <= 5) {
  mensajeW += "Numero : " + x + "<br>";
  sumaW = sumaW + x;
  x++;
}
let mensajeW2 = "la suma de numeros de 1 al 5 es: " + sumaW;

document.getElementById("resultadoWhile").innerHTML = mensajeW;
document.getElementById("sumaWhile").innerHTML = mensajeW2;



