const ciudadesPorPais = {
  Mexico: ["Guadalajara", "Monterrey", "CDMX"],
  España: ["Madrid", "Barcelona", "Valencia"],
  Argentina: ["Buenos Aires", "Cordoba", "Rosario"],
  Colombia: ["Bogota", "Medellin", "Cali"],
};

const selectpais = document.getElementById("pais-select");
const listaciudades = document.getElementById("ciudades-lista");

selectpais.addEventListener('change', () => {
  const pais = selectpais.value;
  listaciudades.innerHTML='<option value="">Seleccione una ciudad</option>';

  ciudadesPorPais[pais].forEach((ciudad) => {
    const opcion = document.createElement("option");
    opcion.value = ciudad;
    opcion.textContent= ciudad
    listaciudades.appendChild(opcion);
  });
});

