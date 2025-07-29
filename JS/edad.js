

const btnVerificar = document.getElementById("verificarBtn");

btnVerificar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    const edad= document.getElementById("edad").value;

    const result= document.getElementById("resultado");

    if(edad>=18){

        result.textContent = `${nombre}  Es mayor de edad  tiene  ${edad} Años `;
        
       
    }else{

        result.innerHTML= nombre +" Es menor de edad <br> tiene "+ edad +" Años";

    }

});