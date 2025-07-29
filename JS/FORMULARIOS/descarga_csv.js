async function cargar_csv() {
    try{
        const respuesta = await fectch("usuarios.csv");
        const texto= await respuesta.text();

        const lineas=texto.trim().split("\n");
    }catch(error){
        alert("Ocurrio un error"+error.message);

    }
    
}