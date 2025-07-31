const ciudadesPorPais = {
  Mexico: ["Guadalajara", "Monterrey", "CDMX"],
  España: ["Madrid", "Barcelona", "Valencia"],
  Argentina: ["Buenos Aires", "Cordoba", "Rosario"],
  Colombia: ["Bogota", "Medellin", "Cali"],
};

document.getElementById("enviar").addEventListener("click", function () {
  let pais = [];
  const selectpais = document.querySelectorAll('input[class="pais"]:checked');
  /*alert(typeof selectpais);*/
  const lista = document.getElementById("ciudades-lista");
  selectpais.forEach((checkbox) => {
    if (checkbox.checked) {
      pais.push(checkbox.value);
    }
  });
  /*alert(typeof pais);*/
  lista.innerHTML = "";
  pais.forEach((valor) => {
    ciudadesPorPais[valor].forEach((ciudad) => {
      const item = document.createElement("li");
      item.textContent = ciudad;
      lista.appendChild(item);
    });
  });
});
