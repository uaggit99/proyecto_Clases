verificar_Sueldo = document.getElementById('verificarS');

verificar_Sueldo.addEventListener("click" , () => {
    
    const sueldo = document.getElementById("sueldo").value ;

    const result3 = document.getElementById("resultado_S");

     if(sueldo>=3000000){

        result3.innerHTML=`DEBE PAGAR IMPUESTOS`;

     }else{
        result3.innerHTML=`NO DEBE  PAGAS IMPUESTOS`;


     }
        

})