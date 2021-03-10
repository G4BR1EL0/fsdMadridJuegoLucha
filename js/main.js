let arrPersonajes=['linea','triangulo','cuadrado','pentagono','hexagono','circulo'];
/* estado Inicial*/

const zonaInicio=document.getElementById("zonaBienvenida");
const zonaPersonaje=document.getElementById("zonaPersonaje");
zonaPersonaje.style.display = "none";
const zonaLucha=document.getElementById("zonaDeLucha");
zonaLucha.style.display = "none";

/**/
let ocultarInicio = () => {
    zonaInicio.style.display = "none";
    zonaPersonaje.style.display = "block";
}
let ocultarSeleccion = () => {
    zonaPersonaje.style.display = "none";
    zonaLucha.style.display = "block";
}
let ocultarLucha = () => {
    zonaLucha.style.display = "none";
    zonaInicio.style.display = "block";
}

let htmlPersonajes='';

arrPersonajes.forEach(e => {    
    htmlPersonajes= 
        htmlPersonajes+`<div id="${e}" onclick='seleccionarPersonaje(this)' class="cuadroPersonaje">
        <div id="img${e}"></div></div>`;
});

document.getElementById("slotsPersonajes").innerHTML=htmlPersonajes;

let seleccionarPersonaje= figura=>{
    // element.classList.add("mystyle");
    
}