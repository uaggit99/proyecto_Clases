let fruta = "manzana";

switch(fruta){
    case "manzana":
        console.log("la manzana vale 2000 pesaso");
        break;
    case "mango":
        console.log("el mango cuenta 1000 pesos");
        break;
    default:
        console.log("No hay furtas");
        break;
}

let jugadaMaquina= Math.floor(Math.random() * 3 )+1;

switch(jugadaMaquina){
    case 1:
        console.log("Piedra");
        break;
    case 2: 
        console.log("Papel");
        break;
    default:
        console.log("Tijeras");
        break;
}