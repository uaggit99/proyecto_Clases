const ciudadesPorPais = {
  Mexico: ["Guadalajara", "Monterrey", "CDMX"],
  España: ["Madrid", "Barcelona", "Valencia"],
  Argentina: ["Buenos Aires", "Cordoba", "Rosario"],
  Colombia: ["Bogota", "Medellin", "Cali"],
};

const paises = document.querySelectorAll('input[type="checkbox"]');
const ciudadesContenedor = document.getElementById("Ciudades");

paises.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    ciudadesContenedor.innerHTML = "";
    paises.forEach((checkbox) => {
      if (checkbox.checked) {
        const pais = checkbox.value;
        const ciudades = ciudadesPorPais[pais];
        const titulo = document.createElement("h3");
        titulo.textContent = pais;
        const lista = document.createElement("ul");
        ciudades.forEach((ciudad) => {
          const item = document.createElement("li");
          item.textContent = ciudad;
          lista.appendChild(item);
        });
        ciudadesContenedor.appendChild(titulo);
        ciudadesContenedor.appendChild(lista);
      }
    });
  });
});
