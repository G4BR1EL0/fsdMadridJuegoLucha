/* estado Inicial*/
const arrPersonajes=[{name:'linea', life :8, evasion:7},
                     {name:'triangulo', life:12, evasion:6},
                     {name:'pentagono', life:14, evasion:5},
                     {name:'cuadrado', life:20, evasion:1},
                     {name:'hexagono', life:16, evasion:3},
                     {name:'circulo', life:15, evasion:4}];
let vidaPrimerPlayer=0;
let vidaSegundoPlayer=0;
const MAXVIDA=5;
const PLAYER1=1;
const PLAYER2=2;
let primerJugador = document.getElementById('primerPlayer');
let segundoJugador = document.getElementById('segundoPlayer');
const zonaInicio = document.getElementById("zonaBienvenida");
const zonaPersonaje = document.getElementById("zonaPersonaje");
zonaPersonaje.style.display = 'none';
const zonaLucha = document.getElementById("zonaDeLucha");
zonaLucha.style.display = 'none';
const zonaVictoria = document.getElementById("zonaVictoria");
zonaVictoria.style.display = 'none';
let btnDos = document.getElementById('btnAtacar2');
btnDos.style.display = 'none';
let btnUno = document.getElementById('btnAtacar1');
let btnUnoPesado = document.getElementById('btnAtaquePesado1');
let btnDosPesado = document.getElementById('btnAtaquePesado2');
btnDosPesado.style.display = 'none';
document.getElementById('comandosPlayer2').style.display='none'
let primerAvatarElegido;
let segundoAvatarElegido;
const PRECISIONATAQUERAPIDO = 8;
const PRECISIONATAQUEPESADO = 5;


/*funciones cambio de pantalla*/
//#region cambioPantalla
let ocultarInicio = () => {
    zonaInicio.style.display = "none";
    fadeIn(zonaPersonaje,800);
    dibujarAvatares();
}

let ocultarSeleccion = () => {
    let primerAvatar=document.getElementById('primerPlayer');
    let segundoAvatar=document.getElementById('segundoPlayer');
    if(primerAvatar.innerHTML!=='' && segundoAvatar.innerHTML!=''){
        zonaPersonaje.style.display = 'none';
        fadeIn(zonaLucha);
        document.getElementById('cuadroLucha').innerHTML=primerAvatar.innerHTML+segundoAvatar.innerHTML;   
        dibujarVida(primerAvatarElegido.life,PLAYER1);    
        dibujarVida(segundoAvatarElegido.life,PLAYER2); 
        vidaPrimerPlayer = primerAvatarElegido.life;
        vidaSegundoPlayer = segundoAvatarElegido.life;
        actualizarIndicadorPlayer(PLAYER1);  
    }    
}

let ocultarLucha = (player) => {
    zonaLucha.style.display = 'none';
    fadeIn(zonaVictoria);
    document.getElementById('mensajeVictoria').innerHTML=`Player${player} wins!`;
}

let volverInicio = () => {
    vidaPrimerPlayer=MAXVIDA;
    vidaSegundoPlayer=MAXVIDA;
    btnDos.style.display='none';
    btnUno.style.display= 'flex';
    primerJugador.innerHTML='';
    segundoJugador.innerHTML='';
    zonaVictoria.style.display = 'none';
    fadeIn(zonaInicio);
    document.getElementById('comandosPlayer2').style.display='none';
    document.getElementById('comandosPlayer1').style.display='flex';
    document.getElementById('mensajeAtaque').innerHTML='';
}
//#endregion

let dibujarAvatares = () =>{
    let htmlPersonajes='';
    arrPersonajes.forEach(e => {    
        htmlPersonajes= 
            htmlPersonajes+
                `<div id="${e.name}" onclick='seleccionarPersonaje(this)' class='cuadroPersonaje'>
                    <div id="img${e.name}"></div>
                    <div>Life:${e.life}</div>
                    <div>Evasion:${e.evasion}</div>
                </div>                
                `;
    });
    document.getElementById("slotsPersonajes").innerHTML=htmlPersonajes;
};

let actualizarIndicadorPlayer = (player) => {
    document.getElementById('indicadorPlayer').innerHTML=`Player${player}`;
};

let seleccionarPersonaje = figura => {    
    let clase='img'+figura.id+'-grande';
    let html=`<div class='${clase}'></div>`;
    if(primerJugador.innerHTML==''){
        primerJugador.innerHTML=html;
        arrPersonajes.forEach(e => {if(e.name==figura.id) primerAvatarElegido=e;});
    }
    else if(segundoJugador.innerHTML==''){
        segundoJugador.innerHTML=html;
        arrPersonajes.forEach(e => {if(e.name==figura.id) segundoAvatarElegido=e;});
    }
    else{
        console.log('algo a ido mal');
    }    
};

let calcularVidas = (attack,player) => {
    let dado1=Math.floor(Math.random()*10);
    let dado2=Math.floor(Math.random()*10);
    if(player === PLAYER1){
        let evasion=segundoAvatarElegido.evasion;
        if(attack === 1){
            if(dado1<=PRECISIONATAQUERAPIDO){
                if(dado2<evasion){
                    document.getElementById('mensajeAtaque').innerHTML='Player 2 EVADES!!';
                }else{
                    document.getElementById('mensajeAtaque').innerHTML='Player 1 HITS!!';
                    vidaSegundoPlayer--;
                }                
            }else{
                document.getElementById('mensajeAtaque').innerHTML='Atack MISS!!';
            }            
            dibujarVida(vidaSegundoPlayer,PLAYER2);
        }else{
            if(dado1<=PRECISIONATAQUEPESADO){
                if(dado2<evasion){
                    document.getElementById('mensajeAtaque').innerHTML='Player 2 EVADES!!';
                }else{
                    document.getElementById('mensajeAtaque').innerHTML='Player 1 HITS!!';
                    vidaSegundoPlayer-=3;
                }                
            }else{
                document.getElementById('mensajeAtaque').innerHTML='Atack MISS!!';
            }            
            dibujarVida(vidaSegundoPlayer,PLAYER2);
        }
    }
    else{
        let evasion=primerAvatarElegido.evasion;
        if(attack === 1){
            if(dado1<=PRECISIONATAQUERAPIDO){
                if(dado2<evasion){
                    document.getElementById('mensajeAtaque').innerHTML='Player 1 EVADES!!';
                }else{
                    document.getElementById('mensajeAtaque').innerHTML='Player 2 HITS!!';
                    vidaPrimerPlayer--;
                }                
            }else{
                document.getElementById('mensajeAtaque').innerHTML='Atack MISS!!';
            } 
            dibujarVida(vidaPrimerPlayer,PLAYER1);
        }else{
            if(dado1<=PRECISIONATAQUEPESADO){
                if(dado2<evasion){
                    document.getElementById('mensajeAtaque').innerHTML='Player 1 EVADES!!';
                }else{
                    document.getElementById('mensajeAtaque').innerHTML='Player 2 HITS!!';
                    vidaPrimerPlayer-=3;
                }                
            }else{
                document.getElementById('mensajeAtaque').innerHTML='Atack MISS!!';
            } 
            dibujarVida(vidaPrimerPlayer,PLAYER1);
        }
    }
};

let dibujarVida = (vida,player) => {    
    if(vida>0){
        let barraVida;
        if(player==PLAYER1){
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
        if(player==PLAYER1){
            ocultarLucha(PLAYER2);
        }
        else{
            ocultarLucha(PLAYER1);
        }
        
    }
};

let ocultarBoton = () => {
    if (btnUno.style.display === 'none'){
        document.getElementById('comandosPlayer2').style.display='none';
        document.getElementById('comandosPlayer1').style.display='flex';
        btnUno.style.display= 'flex';
        btnDos.style.display= 'none';
        btnUnoPesado.style.display= 'flex';
        btnDosPesado.style.display= 'none';
        actualizarIndicadorPlayer(PLAYER1);
    }else{
        document.getElementById('comandosPlayer1').style.display='none';
        document.getElementById('comandosPlayer2').style.display='flex';
        btnUno.style.display= 'none';
        btnDos.style.display= 'flex';
        btnUnoPesado.style.display= 'none';
        btnDosPesado.style.display= 'flex';
        actualizarIndicadorPlayer(PLAYER2);
    }
};

let fadeIn = (element, duration = 600) => {
    element.style.display = '';
    element.style.opacity = 0;
    let last = +new Date();
    let tick = function() {
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      last = +new Date();
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }