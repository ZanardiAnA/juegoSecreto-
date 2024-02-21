let numeroSecreto = 0;
let intentos = 0;
let listaNuemerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
} 

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNuemerosSorteados);
   //si ya sorteamos todos los numeros 
   if (listaNuemerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   } else {
    //si el numero generado esta en la lista
    if (listaNuemerosSorteados.includes(numeroGenerado)) {
       return generarNumeroSecreto();
    } else {
    listaNuemerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }
   } 
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
//limpiar caja
limpiarCaja();
//Indicar mensaje de intervalo de números 
//Generar número aleatorio 
//Inicializar el número de intentos
condicionesIniciales();
//Deshabilitar el bóton de nuevo juego 
document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

