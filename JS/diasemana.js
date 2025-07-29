let diasemana=Math.floor(Math.random() * 7) +1;
let dia;

switch(diasemana){
    case 1:
        dia="Lunes";
        break;
    case 2:
        dia="Martes";
        break;
    case 3:
        dia="Miercoles";
        break;
    case 4:
        dia="Jueves";
        break;
    case 5:
        dia="Viernes";
        break;
    case 6:
        dia="Sabado";
        break;
    case 7:
        dia="Domingo";
        break;
    default :
        dia="valor No valido"
        break;
    
}
alert("El dia de la semana es : "+dia)