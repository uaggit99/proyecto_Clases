import { suma, resta } from './operaciones.js';

const sumar = suma(7, 4);
const restar = resta(10, 2);

document.getElementById("result_m").innerHTML = `resultado de la suma  ${sumar} <br> resultado de la resta ${restar} `;
