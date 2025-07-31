const ciudadesPorPais = {
  Mexico: ["Guadalajara", "Monterrey", "CDMX"],
  España: ["Madrid", "Barcelona", "Valencia"],
  Argentina: ["Buenos Aires", "Cordoba", "Rosario"],
  Colombia: ["Bogota", "Medellin", "Cali"]
};

document.getElementById("enviar").addEventListener("click", function () {
  let pais = "";
  const selectpais = document.querySelectorAll('input[class="pais"]:checked');
  const lista = document.getElementById("ciudades-lista");
  selectpais.forEach((checkbox) => {
    if (checkbox.checked) {
      pais = checkbox.value;
    }
  });
  /*alert(pais);*/
  lista.innerHTML="";

  ciudadesPorPais[pais].forEach((ciudad) => {
    const item = document.createElement("li");
    item.textContent = ciudad;
    lista.appendChild(item);
  });
});
