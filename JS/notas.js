const verificarNotas= document.getElementById("verificarbtn");


verificarNotas.addEventListener("click" , () =>{

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat( document.getElementById("nota3").value);

    const result2 = document.getElementById("resultadoN");
    const promedio = (nota1+nota2+nota3)/3;

    if(promedio>=4){
        result2.innerHTML = "PROMOCIONADO";

    }else{
        result2.innerHTML = "promedio "+ promedio.toFixed(2);
    }

});