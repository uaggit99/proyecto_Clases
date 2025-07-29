let x= parseFloat(prompt("Ingrese valor No 1 : "));
let y= parseFloat(prompt("Ingrese valor No 2 : "));
let z= parseFloat(prompt("Ingrese valor No 3 : "));

if(x>y && y>z){
    alert("El numero mayor es : "+ x);
}
else if(y>x && x>z){
    alert("El numero mayor es : "+ y);

}
else if(z>y && y>x){
    alert("El numero mayor es : "+ z);
}