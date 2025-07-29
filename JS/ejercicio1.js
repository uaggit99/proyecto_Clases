let a= parseFloat(prompt("Ingrese la nota 1 : "));
let b= parseFloat(prompt("Ingrese la nota 2 : "));
let c= parseFloat(prompt("Ingrese la nota 3 : "));

let promedio=0;
promedio=((a+b+c)/3).toFixed(2);
if(promedio>=4){
    alert("!! PROMOCIONADO !!");
}else{
    alert("Promedio : "+promedio)
}