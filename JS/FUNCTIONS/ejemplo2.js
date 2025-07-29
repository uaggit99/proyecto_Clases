let mensaje1= "variable global";

function mostrarMensaje() {
    let mensaje2="variable Local"
    console.log(mensaje2);
    
}

mostrarMensaje();
console.log(mensaje1);

function mostrarMensaje(apellido) {
    let mensaje2="Hola  "+apellido;
    console.log(mensaje2);
    
}
mostrarMensaje("Uribe")
