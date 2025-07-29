//funcion anonima

let nombre= "luis Felipe";

const mostrarNombre= function(){
   return "hola "+nombre
}
console.log(mostrarNombre());

//funcion flecha

const saludo = (nombre2) => {
    return "HOLA "+ nombre2;
};
console.log(saludo("Marcela"));

const calcularPorcentaje = (valor, porcentaje) => (valor * porcentaje) / 100;

// Ejemplo de uso:
console.log(calcularPorcentaje(200, 15)); // Resultado: 30

