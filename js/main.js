let arrPersonajes=['linea','triangulo','cuadrado','pentagono','hexagono','circulo'];
/* estado Inicial*/

const zonaInicio=document.getElementById("zonaBienvenida");
const zonaPersonaje=document.getElementById("zonaPersonaje");
zonaPersonaje.style.display = "none";
const zonaLucha=document.getElementById("zonaDeLucha");
zonaLucha.style.display = "none";

/**/
function ocultarInicio (){
    zonaInicio.style.display = "none";
    zonaPersonaje.style.display = "block";
}
function ocultarSeleccion (){
    zonaPersonaje.style.display = "none";
    zonaLucha.style.display = "block";
}
function ocultarLucha (){
    zonaLucha.style.display = "none";
    zonaInicio.style.display = "block";
}

let htmlPersonajes='';

arrPersonajes.forEach(e => {
    htmlPersonajes= htmlPersonajes+`<div class="cuadroPersonaje"><div id="${e}"></div></div>`;
});

document.getElementById("slotsPersonajes").innerHTML=htmlPersonajes;