let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${intentos > 1 ? "intentos" : "intento"}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento(`p`,`El número secreto es menor`);
        }else{
            asignarTextoElemento(`p`,`El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    // si ya sorteamos todos los numeros
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon todos los numeros posibles`);

    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    //si el numero generado esta incluido en la lista, hacemos una operacion
}

function condicionesIniciales(){
    asignarTextoElemento(`h1`,"Juego del número secreto");
    asignarTextoElemento(`p`,`Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;  
}

function limpiarCaja(){
    document.querySelector(`#valorUsuario`).value = ``;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
}

condicionesIniciales();