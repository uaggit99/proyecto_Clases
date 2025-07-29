document.getElementById("adicionar").addEventListener('click', () =>{
    event.preventDefault();
    let texto = document.getElementById("texto").value.trim();
    let lista= document.getElementById("lista");
    if(texto===""){
        alert("El campo esta vacio");
        return ;
    }else{   
    let nuevo = document.createElement('li');
    nuevo.textContent=texto;
    lista.appendChild(nuevo);
    document.getElementById("texto").value="";
     }

})