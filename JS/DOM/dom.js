const botoncambiar = document.getElementById("mibotoncambiar");
const mensaje = document.getElementById("mimensaje");

botoncambiar.addEventListener('click', () =>{
    /*alert('ingreso evento');*/
    mensaje.style.color ="red";
    mensaje.style.fontSize="30px";


})
document.addEventListener("keydown" , () =>{
document.getElementById("tecla").textContent = "tecla presionada "+ event.key;

})
window.addEventListener("scroll", () =>{
    document.body.style.backgroundColor=window.scrollY >200 ? "lightblue" : "white" ;
})

