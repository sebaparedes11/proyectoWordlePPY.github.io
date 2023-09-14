let intentos= 6;
let Palabra = "APPLE";
let diccionario = ['APPLE','HURLS','WINGS','YOUTH']
Math.floor(Math.random() * 10) + 1;
const palabra = diccionario[Math.floor(Math.random()*diccionario.length)]

window.addEventListener('Load', init)

function init(){
    console.log('Esto se ejecuta cuando se carga la pagina web')
}
const buttom = document.getElementById("guess-button");
function intentar(){
const INTENTO = leerintento();
if (INTENTO === palabra){
    terminar("<h1>GANASTE!😄😀</h1>")
    return
}
for (let i in palabra){
    if (INTENTO[i]===palabra[i]){
        console.log(INTENTO[i],"green")
    }else if (palabra.includes(INTENTO[i])){
        console.log(INTENTO[i],"yellow")
    } else {
        console.log(INTENTO[i],"grey")
    }
}
  intentos--
  if (intentos==0){
    terminar("<h1>PERDISTE!😫</h1>")
  }
}
function terminar(mensaje){
 const INPUT = document.getElementById("guess-input");
 INPUT.disabled = true;
 buttom.disabled = true;
 let contenedor = document.getElementById('guesses');
 contenedor.innerHTML = mensaje;
}
buttom.addEventListener("click", intentar);
const input= document.getElementById("guess-input"); 
const valor= input.value;
function leerintento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
const GRID= document.getElementById("Grid");
const ROW= document.createElement("div");
ROW.className = 'row';
for (let i in palabra){
    const SPAN = document.createElement('span');
    SPAN.classname = 'letter';
    if (INTENTO[i]===palabra[i]){
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'green';
    }else if (palabra.includes(INTENTO[i]) ){
        SPAN.innerHTML =INTENTO[i];
        SPAN.style.backgroundColor= '#yellow';
    } else { 
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor= '#grey'  
    }
    ROW.appendChild(SPAN)
}
GRID.appendChild(ROW)



