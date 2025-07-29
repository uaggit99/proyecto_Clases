let a= parseFloat(prompt("Ingrese la nota 1 : "));
let b= parseFloat(prompt("Ingrese la nota 2 : "));
let c= parseFloat(prompt("Ingrese la nota 3 : "));

let promedio=((a+b+c)/3).toFixed(2);
if(promedio<=5 && promedio>=4){
    alert("!! Promocionado !!");
}else if(promedio<4 && promedio>=3){
    alert(" Regular ");

}else if(promedio<3){
    alert("Reprobado");
}
else{
    alert("Promedio "+ promedio);
}