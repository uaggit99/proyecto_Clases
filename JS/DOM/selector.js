const ciudadesPorPais = {
  Mexico: ["guadalajara", "Monterrey", "CDMX"],
  España: ["Madrid", "Barcelona", "Valencia"],
  Argentina: ["Buenos Aires", "Cordoba", "Rosario"],
  Colombia: ["Bogota", "Medellin", "Cali"],
};

const selectpais = document.getElementById("pais-select");
const listaciudades = document.getElementById("ciudades-lista");

selectpais.addEventListener('change', () => {
  const pais = selectpais.value;
  listaciudades.innerHTML='';
  

  ciudadesPorPais[pais].forEach((ciudad) => {
    const item = document.createElement("li");
    item.textContent = ciudad;
    listaciudades.appendChild(item);
  });
});
