let arrPersonajes=['linea','triangulo','cuadrado','pentagono','hexagono','circulo'];
/* estado Inicial*/

const zonaInicio=document.getElementById("zonaBienvenida");
const zonaPersonaje=document.getElementById("zonaPersonaje");
zonaPersonaje.style.display = "none";
const zonaLucha=document.getElementById("zonaDeLucha");
zonaLucha.style.display = "none";

/*funciones cambio de pantalla*/

//#region cambioPantalla
let ocultarInicio = () => {
    zonaInicio.style.display = "none";
    zonaPersonaje.style.display = "block";
}
let ocultarSeleccion = () => {
    let primerJugador=document.getElementById('primerPlayer');
    let segundoJugador=document.getElementById('segundoPlayer');
    if(primerJugador.innerHTML!=='' && segundoJugador.innerHTML!=''){
        zonaPersonaje.style.display = "none";
        zonaLucha.style.display = "block";
        document.getElementById('cuadroLucha').innerHTML=primerJugador.innerHTML+segundoJugador.innerHTML;        
    }    
}
let ocultarLucha = () => {
    zonaLucha.style.display = "none";
    zonaInicio.style.display = "block";
}
//#endregion

let htmlPersonajes='';

arrPersonajes.forEach(e => {    
    htmlPersonajes= 
        htmlPersonajes+`<div id="${e}" onclick='seleccionarPersonaje(this)' class='cuadroPersonaje'>
        <div id="img${e}"></div></div>`;
});

document.getElementById("slotsPersonajes").innerHTML=htmlPersonajes;

let seleccionarPersonaje= figura=>{
    let primerJugador=document.getElementById('primerPlayer');
    let segundoJugador=document.getElementById('segundoPlayer');
    let clase='img'+figura.id+'-grande';
    let html=`<div class='${clase}'></div>`
    if(primerJugador.innerHTML==''){
        primerJugador.innerHTML=html;
    }
    else if(segundoJugador.innerHTML==''){
        segundoJugador.innerHTML=html;
        //TODO
        //activar boton pelear y desactivar seleccion de personajes
    }
    else{
        console.log('algo a ido mal');
    }
    //activa el paso a pelea en cuando hayan dos personajes clicados
    // element.classList.add("mystyle");
    
}