let x= parseFloat(prompt("Ingrese valor No 1 : "));
let y= parseFloat(prompt("Ingrese valor No 2 : "));
let z= parseFloat(prompt("Ingrese valor No 3 : "));

if(x>y){
    if(x>z){
        alert("El numero mayor es : "+x);
    }
}else if(y>x){
    if(y>z){
        alert("El numero mayor es : "+ y);
    }
    else{
    alert("El numero mayor es : "+ z);
    }
}
    