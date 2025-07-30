import {getHeroeById} from './importacion.js';

const getHeroeByIdAsinc = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
         const p = getHeroeById(id);
         if(p){
            resolve(p);
         }else{
            reject("No se resolvio la promesa");
         }
        }, 2000);
    });

};

getHeroeByIdAsinc(7)
.then(heroe => console.log('heroe', heroe))
.catch(err => console.warn(err));

