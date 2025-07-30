/*import {heroes} from '../DATA/datos.js';

 console.log(heroes);
 
//exportacion por defecto

 import heroes from '../DATA/datos2.js';
 console.log(heroes)*/

import heroes , {owner} from '../DATA/datos2.js'

 console.log(owner);

 export const getHeroeById = (id) =>{
    return heroes.find((heroe) => heroe.id==id);
 }
  console.log(getHeroeById(5));

  const getHeroesByOwner= (owner)=> heroes.filter((heroe)=> heroe.owner==owner);

  console.log(getHeroesByOwner("DC"));
  