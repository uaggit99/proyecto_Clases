function saludar(){
    document.getElementById("saludo").innerHTML= "! Hola Bienvenidos  a JS !";
};
saludar();

function saludarNombre(name){
    document.getElementById("saludoConParametro").innerHTML+= "! Hola  " + name + " ! <br>";
}
saludarNombre("Luis");
saludarNombre("Julia");
saludarNombre("Agustin");

function sumar(x,y){
    return x+y;
}

let result =sumar(34,12);
document.getElementById("resultadoSuma").innerHTML= "La suma es : "+result ;

let mensaje= "Variable Global";

function mostrarMensaje(){
    let mensaje = "Variable Local";
    document.getElementById("ambitoVariable").innerHTML= "Dentro de la funcion  : " + mensaje ;

}
mostrarMensaje();

document.getElementById("ambitoVariable").innerHTML+= "<br> Fuera de la funcion : " + mensaje ;

