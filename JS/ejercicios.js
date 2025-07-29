// ejercicio 1

let n1 = 4.5;
let n2 = 5.0;
let n3 = 3.9;

console.log("La nota promedio es: "+ ((n1+n2+n3)/3).toFixed(2));
console.log("La nota promedio es: "+ (n1+n2+n3)/3);


//ejercicio 2

let nombre = "Felipe";
let edad = 23;
console.log(nombre + " tiene "+ edad +" años")


// ejercicio 3

let valorBalon= 10000;
let cantidad= 3;
console.log("Total a pagar :"+"$"+valorBalon*cantidad +" pesos");

// descuento

let venta= 34500;
let descuento = venta * 0.10
console.log("valor descuento "+descuento)
console.log("Total a pagar con 10% de descuento es $"+(venta-descuento));

// horas extras

const salario = 1430500;
let valor_extra = (salario/220)*1.25 ;
let cant_extras= 6 ;
console.log("el valor a pagar por "+cant_extras+" horas es $"+Math.round((valor_extra*cant_extras)));



