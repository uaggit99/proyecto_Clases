function saludar(nombre){
    console.log("! Hola "+nombre+" !")
}

saludar("Camila");

function sumar(a,b=10){
    return a+b;
}

console.log("suma : "+ sumar(4,9));
console.log("suma : "+ sumar(9));

const suma=(x,y)=>{return x+y};
console.log("suma : "+suma(12,5));

const suma2=(x,y)=>`${x+y}`;
console.log("suma : "+suma2(12,11));

const nombres = ["Ana", "Luis", "Uberney"];
const saludos = nombres.map(nombre => `Hola, ${nombre}!`);
console.log(saludos);
// ["Hola, Ana!", "Hola, Luis!", "Hola, Uberney!"]
