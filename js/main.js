/* estado Inicial*/
let arrPersonajes=['linea','triangulo','cuadrado','pentagono','hexagono','circulo'];
let vidaPrimerPlayer=10;
let vidaSegundoPlayer=10;
const MAXVIDA=10;
const PLAYER1=1;
const PLAYER2=2;
let primerJugador=document.getElementById('primerPlayer');
let segundoJugador=document.getElementById('segundoPlayer');
const zonaInicio=document.getElementById("zonaBienvenida");
const zonaPersonaje=document.getElementById("zonaPersonaje");
zonaPersonaje.style.display = 'none';
const zonaLucha=document.getElementById("zonaDeLucha");
zonaLucha.style.display = 'none';
const zonaVictoria=document.getElementById("zonaVictoria");
zonaVictoria.style.display = 'none';
let btnDos = document.getElementById('btnAtacar2');
btnDos.style.display='none';
let btnUno = document.getElementById('btnAtacar1');


/*funciones cambio de pantalla*/

//#region cambioPantalla
let ocultarInicio = () => {
    zonaInicio.style.display = "none";
    zonaPersonaje.style.display = "flex";
}

let ocultarSeleccion = () => {
    let primerJugador=document.getElementById('primerPlayer');
    let segundoJugador=document.getElementById('segundoPlayer');
    if(primerJugador.innerHTML!=='' && segundoJugador.innerHTML!=''){
        zonaPersonaje.style.display = 'none';
        zonaLucha.style.display = 'flex';
        document.getElementById('cuadroLucha').innerHTML=primerJugador.innerHTML+segundoJugador.innerHTML;    
        dibujarVida(MAXVIDA,PLAYER1);    
        dibujarVida(MAXVIDA,PLAYER2);    
    }    
}

let ocultarLucha = (player) => {
    zonaLucha.style.display = 'none';
    zonaVictoria.style.display = 'flex';
    document.getElementById('mensajeVictoria').innerHTML=`A ganado el Player${player}`;
}

let volverInicio = () => {
    vidaPrimerPlayer=10;
    vidaSegundoPlayer=10;
    btnDos.style.display='none';
    btnUno.style.display= 'flex';
    primerJugador.innerHTML='';
    segundoJugador.innerHTML='';
    zonaVictoria.style.display = 'none';
    zonaInicio.style.display = 'flex';
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

let calcularVidas = (attack,player) => {
    if(player === 1){
        if(attack === 1){
            vidaSegundoPlayer--;
            dibujarVida(vidaSegundoPlayer,player);
        }
        else{
            //segundo ataque
        }
    }
    else{
        if(attack === 1){
            vidaPrimerPlayer--;
            dibujarVida(vidaPrimerPlayer,player);
        }
        else{
            //segundo ataque
        }
    }
}

let dibujarVida = (vida,player) => {    
    if(vida>0){
        let barraVida;
        if(player!=PLAYER1){
            barraVida=document.getElementById('barraVidaPrimerPlayer');
        }
        else{
            barraVida=document.getElementById('barraVidaSegundoPlayer');
        }

        let html='';
        for(let i = 0; i < vida; i++){
            html += `<div class='hitPoint'></div>`;
        }
        barraVida.innerHTML=html;
    }
    else{
        ocultarLucha(player);
        //fin de juego
    }
}

let ocultarBoton = () => {
    if (btnUno.style.display === 'none'){
        btnUno.style.display= 'flex';
        btnDos.style.display= 'none';
    }else{
        btnUno.style.display= 'none';
        btnDos.style.display= 'flex';
    }
} 