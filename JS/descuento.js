const verificar_V = document.getElementById("verificarV");

verificar_V.addEventListener("click", () => {

    const venta = parseFloat(document.getElementById("venta").value) ;

    const descuento = venta*0.20 ;
    

    const result4= document.getElementById("resultadoV");

    if(venta>200){

        result4.textContent = `Total a pagar  es ${venta- descuento}`;
        
       
    }else{

        result4.innerHTML= " Gracias por su compra";

    }

});