let compra= parseFloat(prompt("ingrese el valor de la compra :"));
let descuento = compra * 0.20 ;
if(compra>200){
    alert("Total a pagar es : "+ (compra-descuento));
}else{
    alert(" gracias por su compra ");
}