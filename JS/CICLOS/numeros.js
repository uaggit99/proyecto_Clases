/*let elemento= document.getElementById("resultado_n");
const posicion = elemento.getBoundingClientRect();
const posicionVertical = posicion.top + window.scrollY;
const posicionHorizontal = posicion.left + window.scrollX;*/
//alert(posicion.left)

document.getElementById("generar").addEventListener("click", () => {
  let imprimir = document.getElementById("resultado_n");

  let x = 1;
  while (x <= 100) {
    imprimir.innerHTML += x + "   ";
    x++;
  }
});

document.getElementById("generar2").addEventListener("click", () => {
  let imprimir2 = document.getElementById("resultado2");

  let y = 0;
  while (y <= 1000) {
    imprimir2.textContent += `${y}   `;
    y += 2;
  }
});

document.getElementById("generar3").addEventListener("click", () => {
  const valor = parseInt(document.getElementById("limite").value);

  let imprimir3 = document.getElementById("resultado3");
  let a = 0;
  while (a <= valor) {
    imprimir3.textContent += `${a}   `;
    a += 2;
  }
});

document.getElementById("generar4").addEventListener("click", () => {

  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);
  const nota5 = parseFloat(document.getElementById("nota5").value);

  const imprimir4 = document.getElementById("resultado4");

  const lista = [nota1, nota2, nota3, nota4, nota5];
  let n = 0;
  let c1 = 0;
  let c2 = 0;

  
  
  while (n < lista.length) {
    if (lista[n]<=5 ) {
      if(lista[n] >= 4){
     c1++;
    }
    else{
      c2++
    }
      
    }
    n++;
  }
  
  imprimir4.textContent = `Notas mayores a 4 son ${c1} y Notas menores a 4 son ${c2}`;
});

document.getElementById("generar5").addEventListener("click",() =>{
  const imprimir5 = document.getElementById("resultado5");

  const incremento =11;

  let s=1
  while(s<=25){
    imprimir5.innerHTML+= (s*incremento) +"  ";
    s++;
  }
})
