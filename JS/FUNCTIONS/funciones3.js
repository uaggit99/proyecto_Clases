//autoinvocacion

(function () {
  console.log("HOLA JS");
})();

(function (name) {
  console.log("hola " + name);
})("Maria");

(function (name2) {
  console.log(`hola  ${name2}`);
})("Luisa");

// funcion dentro de otra funcion

function a(num) {
  function b(num2) {
    return num2 * 4;
  }
  return b(num);
}

console.log(a(8));

//funcion que  retorna otra funcion

function x(){
    console.log("HOLA ");
    return function(){
         return console.log("Miranda");
    }
}

x()();  // llamdo con retorno de otra funcion


// llamdos Call Apply

function sumar2(a,b){
    return a+b;
}

var c = sumar2.call(c, 6, 10);
console.log(c);

c= sumar2.apply(c, [70,5]);
console.log(c)